let url = "";
let title = "";

document.getElementById("url").addEventListener('input', function(e){ 
    url = e.target.value;
    console.log(url)
});

document.getElementById("category").addEventListener('input', function(e){ 
    title = e.target.value;
    console.log(title)
});

async function addBookmark(){ 
    const response = await fetch("http://localhost:3000/bookmark", { 
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({ 
            title,
            url
        })
    });

    const result = await response.json();
    console.log('Success', result);
};

async function getBookmarks(){ 
    const response = await fetch("http://localhost:3000/allbookmarks", { 
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        } 
    });

    const result = await response.json();
    console.log('Success', result.bookmarks);

    const container = document.getElementById("bookmarks");
    const bookmarks = result.bookmarks

    bookmarks.forEach(bookmark => {
        let newEl = document.createElement('div');
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'delete';
        deleteBtn.dataset.id = bookmark.id;
        deleteBtn.addEventListener('click', function() { 
            const id = this.dataset.id;
            deleteBm(id)
        })
        newEl.innerText = `${bookmark.title}`;
        newEl.append(deleteBtn)

        container.append(newEl)
    });
}

async function deleteBm(id) { 
    const response = await fetch(`http://localhost:3000/deletebookmark/:${id}`,{ 
        method: "DELETE",
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    getBookmarks()

    const result = await response.json();
    console.log('Success', result)
}