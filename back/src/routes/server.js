
const http = require("http");
const PORT = 3001;
const characters = require('../utils/data');

http.createServer(function(req,res){
    const allUrl = req.url.split('/')
    if(false){

    } else if(req.url === '/rickandmorty/characters'){
        res.writeHead(200, {'Content-type': 'application/json'})
        res.end(JSON.stringify(characters));
    } else {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.end("Route not found");
    }

}).listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})
