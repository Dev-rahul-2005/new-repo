const express =  require("express");
const app = express();

// console.log(app);

let port = 8080;
app.listen(port, ()=>{
    console.log(`app is listning on port http://localhost:${port}`);
});

app.get("/", (req,res) =>{
    res.send("hello,i am root path");
});

app.get("/apple", (req,res) =>{
    res.send("you connected apple path");
});

app.get("/orange", (req,res) =>{
    res.send("you connected orange path");
});

app.get("/username/:id", (req, res) => {
    let{username, id} = req.params;
    let htmlStr = `<h1> welcome to the page ${username}</h1>`;
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    let {q}=(req.query);
    res.send(`search results for the query: ${q}`);
});



// app.use((req,res) =>{
//     console.log("request received");
//     let code = "<h1>my name is rahul</h1><ul><li>branch</li><li>cse</li></ul>";
//     res.send(code);
// });