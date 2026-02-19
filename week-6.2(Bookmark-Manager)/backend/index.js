import express from "express";
import cors from "cors";
const PORT = 3000;
let currentId = 1;
const bookmarks = [];
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => { 
    res.send("hello ji kya haal he")
});

app.post("/bookmark", (req, res) => {
   try{ 
     const { title, url } = req.body;
    let id = currentId ;

    let newBookmark = { 
        id,
        title,
        url
    }

    bookmarks.push(newBookmark);

    currentId++;

    res.status(200).json({ 
        Msg: "new bookmark creted",
        newBookmark
    });
   }catch(e){ 
    res.status(401).json({ 
        Msg: "failed to create new bookmark"
    });
   }
});

app.get("/allbookmarks", (req, res) => { 
    try{ 
       return res.status(201).json({ 
            bookmarks
        })
    }catch(e){ 
        return res.status(302).json({ 
            Msg: "failed to fetch all bookmarks"
        })
    }
});

app.put("/updatebookmark/:id", (req, res) => { 
    const { title, url } = req.body;
    const reqId = parseInt(req.params.id)
    let updatedbookmark = null;

    for(let i = 0; i < bookmarks.length; i++){ 
        if(reqId === bookmarks[i].id){ 
            bookmarks[i].title = title;
            bookmarks[i].url = url;
            updatedbookmark = bookmarks[i];
            break
        }
    };

    if(!updatedbookmark){ 
        res.status(404).json({ 
            Msg: "bookmark not found"
        });
    }


    res.status(200).json({ 
        Msg: "bookmark updated successfully",
        updatedbookmark
    });
})

app.delete("/deletebookmark/:id", (req, res) => { 
    let id = parseInt(req.params.id);
    let index = id - 1;

   let deletedBookmark = bookmarks.splice(index, 1);

   res.status(201).json({ 
    Msg: "bookmark deleted successfully",
    deletedBookmark
   });
})

app.listen(PORT, console.log(`app listening on ${PORT}`));