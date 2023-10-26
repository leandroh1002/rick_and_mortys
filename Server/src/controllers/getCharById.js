const axios = require('axios');
// exports.getCharById = (res, id)=>{
//     //axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response)=>{
//         const ch = response.data;

//         return{
//             id,
//             name: ch.name,
//             gender: ch.gender,
//             species:ch.species,
//             origin:ch.origin,
//             image:ch.image,
//             status:ch,
//         }
//     })
//     .then((response)=>{
//         res.writeHead(200, {'Content-Type':'application/json'})
//         res.end(JSON.stringify(response))
//     })
//     .catch((reason)=>{
//         res.writeHead(500, {'Content-Type':'text/plain'})
//         res.end(`Message: ${reason.message}`) //reason.response.data.error
//     })
// }

const URL = `https://rickandmortyapi.com/api/character/`;
    const {id} = req.params;
const getCharById = (req, res)=>{
    axios.get(URL + id).then(({data})=>{
        const {name, gender, species, origin, image, status} = data;
        const character = {id, name, gender, species, origin, image, status}
        return character.name ? res.json(character) : res.status(404).send ('Character no found')
    })
    .catch((err) => {
        return res.status(500).send(err.message)
    })
}

module.exports = getCharById;