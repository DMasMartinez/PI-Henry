
// const http = require("http");
// const { getCharById } = require('./controllers/getCharByid')
// // const characters = require("./data")
// const PORT = 3001;

// const server = http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     const { url } = req;
//     if (url.includes("/rickandmorty/character")){
//         const id = +url.split("/").pop();
//         return getCharById(res,id)
//         // const character = characters.find(char=>char.id===id)
//         // res.writeHead(200, {"Content-Type":"application/json"});
//         // if (character){
//         //     // res.writeHead(500,{'Content-Type':'application/json'})
//         //     // res.end('hola')
//         //     return res.end(JSON.stringify(character));
//         // }else{
//         //     return res.end(JSON.stringify({"error":"Character not found"}));
//         // }
//     }
//     console.log(`server levantado en el puerto ${PORT}`);
//     res.writeHead(404,{"Content-Type":"application/json"});
//     res.end(JSON.stringify({"error":"not found"}))
// })
// server.listen(PORT,()=>{console.log(`server levantado en el puerto ${PORT}`)});


const express = require("express");
const server = express();
const PORT = 3001;

server.listen(PORT, ()=> {
   console.log( `Server raised in port: ${PORT}`);
});