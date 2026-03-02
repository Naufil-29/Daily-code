import { stripe } from "../config/stripe.js";
import { CourseModel } from "../Models/models.js";

export const createChekcoutSession = async (req, res) => { 
    try{ 
      const { courseId } = req.body;
      const userId = req.userId
      console.log("userId ", userId);
      console.log("courseId ", courseId);

      const course = await CourseModel.findById(courseId);

      if(!course){ 
        return res.status(404).json({Msg: "course not found"})
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [ 
            { 
                price_data:{ 
                    currency: "inr",
                    product_data: { 
                        name: course.title
                    },
                    unit_amount: course.price * 100, //paise
                },
                quantity: 1
            },

        ],
        success_url: "http://localhost:5173/payment-success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:5173/payment-cancel",
        metadata: { 
            userId: userId,
            courseId: courseId.toString(),
        },
      });
        console.log(session.metadata);
      res.json({url: session.url})
    }
    catch(e){ 
     console.log("error-creating-session", e);
     res.status(500).json({ message: "Payment session failed" })
    }
};


export const verifyPayment = async (req, res) => {
    const { sessionId } = req.body;
    console.log("sessionId ", sessionId);

    const session = stripe.checkout.sessions.retrieve(sessionId);

    if(session.payment_status !== "paid"){ 
        return res.status(404).json({Msg: "payment is not completed"});
    }

    const { userId, courseId } = session.metadata;

    await UserModel.findByIdAndUpdate( userId,
        { $addToSet: { purchasedCourses: courseId } }
    );

    res.json({ message: "Course added successfully" });
};