
export const getMovies = async(req,res) => {
    const {users} = req.body()
    try {
        if (users.length !== 0) return res.status(200).json({ok:true, msg:'Aun no hay peliculas registradas'})
        return res.status(200).json({ok: true, msg:'Usuarios encontrados', users:users})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok:false, msg:'Error interno del servidor'})
    }
}

export const createMovie= async(req,res) => {
    try {
        const newMovie = req.body()
        return res.status(200).json({ok:true, msg:'Pelicula creada correctamente', new_movie: newMovie})
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok:false, msg:'Error interno del servidor'})
    }
}

export const getOneMovie = async(req,res) => {
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok:false, msg:'Error interno del servidor'})
    }
}

export const updateMovie = async(req,res) => {
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok:false, msg:'Error interno del servidor'})
    }
}

export const deleteMovies = async(req,res) => {
    try {
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({ok:false, msg:'Error interno del servidor'})
    }
}