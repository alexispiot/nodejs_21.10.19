const express = require('express');

const hostname ='0.0.0.0';
const port = 3000;

const server = express();

server.get("/", (req, res) => {
    res.status(200);
    res.type("html");
    res.end("Accueil");
})

server.get("/posts", (req, res) => {
    res.status(200);
    res.type("html");
    res.end("Liste des articles");
})


server.get("/posts/:post_id", (req, res) => {
    res.status(200);
    res.type("html");
    res.end(`Article : ${req.params.post_id}`);
})

server.get("/users", (req, res) => {
    res.status(200);
    res.type("html");
    res.end("Liste des utilisateurs");
})

server.get("/users/:profil_name", (req, res) => {
    res.status(200);
    res.type("html");
    res.end(`Bonjour ${req.params.profil_name}`);
})

// const server = http.createServer(
//     (req, res) => {

//         // let url = req.url;
//         let {url} = req;

//         console.log(req.url);

//         if(url == "/posts"){
//             res.statusCode = 200;
//             res.setHeader('Content-type', 'text/plain');
//             res.end('Liste des articles');
//         }
//         else if(url == "/users"){
//             res.statusCode = 200;
//             res.setHeader('Content-type', 'text/plain');
//             res.end('Liste des utilisateurs');
//         }

//     }
// );

server.listen(port, hostname);