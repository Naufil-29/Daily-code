let title = "";
let content = "";

document.getElementById("title-input").addEventListener('input', function(e){ 
    title = e.target.value;
    console.log(e.target.value);
});

document.getElementById("content-input").addEventListener('input', function(e){ 
    content = e.target.value;
    console.log(e.target.value)
});

async function AddTodo() { 
    const response = await fetch("http://localhost:3000/newtodo",{ 
        method: "POST",
        headers: { 
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({ 
            title,
            content
        })

    });
        const result = await response.json();
        console.log("Success:", result);
}

async function getAllTodo() { 
    const response = await fetch("http://localhost:3000/alltodos", { 
         method: 'GET',
         headers:{ 
          'Content-Type': 'application/json',
         }
        })

    const result = await response.json();
    console.log("success", result.todos);
    const todos = result.todos;
    let container = document.getElementById('todos-table')
    todos.forEach(todo => {
        let newEl = document.createElement('div');
        newEl.innerText = `${todo.title}`;
        container.append(newEl);
    });
}