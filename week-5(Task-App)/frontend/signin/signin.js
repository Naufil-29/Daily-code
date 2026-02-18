let email = "";
let password = "";

document.getElementById("email-input").addEventListener("input", function(e){ 
    email = e.target.value;
    console.log(e.target.value)
});
document.getElementById("password-input").addEventListener("input", function(e){ 
    password = e.target.value;
    console.log(e.target.value)
});


        async function Signin(){ 
            try{ 
                const response = await fetch("http://localhost:3000/signin", { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const result = await response.json();
            console.log("Success:", result);
            const token = result.token;
            localStorage.setItem("token", token)
            window.location.href = "../home/home.html"
            }catch (error) {
                console.error("Error:", error);
            }
        }