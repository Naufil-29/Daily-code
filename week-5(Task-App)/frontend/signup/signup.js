
 
let email = "";
let username = "";
let password = "";

document.getElementById("email-input").addEventListener("input", function(e){ 
    email = e.target.value;
    console.log(e.target.value)
});
document.getElementById("username-input").addEventListener("input", function(e){ 
    username = e.target.value;
    console.log(e.target.value)
});
document.getElementById("password-input").addEventListener("input", function(e){ 
    password = e.target.value;
    console.log(e.target.value)
});


        async function Signup(){ 
            try{ 
                const response = await fetch("http://localhost:3000/signup", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    username,
                    email,
                    password
                })
            })
            const result = await response.json();
            console.log("Success:", result);

            window.location.href = "../signin/signin.html"
            }catch (error) {
                console.error("Error:", error);
            }
        }