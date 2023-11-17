const { Favorite } = require ('../DB_connection');


const postFav = async (req, res) =>{
    try {
    const {id, name, origin, status, image, species, gender} = req.body;
    if (!id || !name || !origin || !status || !image || !species || !gender) {
        return res.status(400).json({ error: 'Faltan datos o son inválidos' });
    }
        await Favorite.findOrCreate({
            where:{
                id, name, origin, status, image, species, gender
            }
        })

        const allFavorites = await Favorite.findAll();
        return res.json(allFavorites)
    
} catch (error) {
    return res.status(500).json({ error: 'Error interno del servidor' });
}}

module.exports = postFav;