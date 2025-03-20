export const authRole = (role) => {
    return (req, res, next) => {
        if (!req.user || req.user.role !== role){
            return res.status(403).json({error: `No tienes acceso, permisos insuficientes`})
        }
        next();
    }
}
export const authUser = (req, res, next)=>{
    if(!req.user){
        return res.status(401).json({error: 'no tienes acceso, debes iniciar sesión'});
    }
    next();
}