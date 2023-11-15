const { Favorite } = require ('../DB_connection');

const deleteFav = async (req, res) =>{
    try {
        const {id} = req.params;
        const characterDelete = await Favorite.findByPk(id);

        characterDelete.destroy();

        const allFavorites = await Favorite.findAll()

        return res.status(200).json(allFavorites)
        
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = deleteFav;