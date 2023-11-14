const {server} = require ('./app')
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({})
.then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
.catch((error)=> console.log (error))






// const http = require("http")
// const PORT = 3001;
// // const characters = require('./utils/data');
// const {getCharById} = require('./controllers/getCharById')

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     // if(url.includes("/rickandmorty/character")){
//     //     const id = Number(url.split("/").pop());
//     //     const character = characters.find((char) => char.id === id)

//     //     res.writeHead(200, {'Content-Type':'application/json'})
//     //     return res.end(JSON.stringify(character))
//     // }

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop());
//         getCharById(res, id)
//     }
// }).listen(PORT, "localhost")