const axios = require('axios');
exports.getCharById = (res, id)=>{
    axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
    .then((response)=>{
        const ch = response.data;

        return{
            id,
            name: ch.name,
            gender: ch.gender,
            species:ch.species,
            origin:ch.origin,
            image:ch.image,
            status:ch,
        }
    })
    .then((response)=>{
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(response))
    })
    .catch((reason)=>{
        res.writeHead(500, {'Content-Type':'text/plain'})
        res.end(`Message: ${reason.message}`) //reason.response.data.error
    })
}