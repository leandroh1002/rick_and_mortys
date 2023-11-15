const { User } = require ('../DB_connection');

const login = async (req, res) =>{
    try {
        const {email, password} = req.query;
        if (!email || !password) return res.status(400).json({ error: 'Faltan Datos' })

        const user = await User.findOne({
            where: {email}
        })
        if(!user) return res.status(404).json({ error: 'Usuario no encontrado' })
        
        return user.password === password ? res.status(200).json({access: true}) : res.status(403).json({ error: 'Contraseña incorrecta' })


       

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = login;