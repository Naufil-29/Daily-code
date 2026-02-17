import mongoose, { Schema } from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://shaikhnaufil2908_db:Burg3167Man@paytm-db.kd1comr.mongodb.net/task-app");

const UserSchema = new mongoose.Schema({ 
    _id: { type: Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    username: { type: String, required: true  },
    email: { type: String, required: true, unique: true  },
    password: { type: String, required: true  },
});

const TodoSchema = new mongoose.Schema({ 
    userId: { type: Schema.Types.ObjectId },
    title: { type: String, required: true  },
    content: { type: String, required: true  },
});

export const UserModel = mongoose.model ("user", UserSchema);
export const TodoModel = mongoose.model ("todo", TodoSchema);
