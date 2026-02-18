let title = "";
let content = "";



document.getElementById("title-input").addEventListener('input', function (e){ 
    title = e.target.value;
    console.log(e.target.value)
});

document.getElementById("content-input").addEventListener('input', function(e){ 
    content = e.target.value;
    console.log(e.target.value)
});

let token = localStorage.getItem("token")
async function AddTodo(){ 
    try{ 
        const response = await fetch("http://localhost:3000/newtodo",{ 
        method: 'POST',
        headers:{ 
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body : JSON.stringify({ 
            title,
            content
        })
    })

        const result = await response.json();
        console.log("Success:", result);
    }catch (error) {
        console.error("Error:", error);
    }
}

async function getAllTodo(){ 
    try{ 
        const response = await fetch("http://localhost:3000/alltodos", { 
            method: 'GET',
            headers:{ 
            'Content-Type': 'application/json',
            'Authorization': token 
            }
        })

        const result = await response.json();
        console.log("success", result.userTodos);
        const todos = result.userTodos;
        const container = document.getElementById("todos-table");

        todos.forEach(todo => {
            let newElement = document.createElement('div');
            newElement.innerText = `${todo.title}`;
            container.append(newElement);
        });
    }catch (error) {
        console.error("Error:", error);
    }
}

async function logout() { 
    localStorage.removeItem("token")
    alert("token removed logged out")
    window.location.href = "../signup/signup.html"
}