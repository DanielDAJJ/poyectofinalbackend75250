import { verifyToken } from "../utils/utils.js";
export const authRole = (role) => {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        console.log("Usuario autenticado:", req.user);
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No tienes acceso, debes iniciar sesión" });
        }
        const token = authHeader.split(" ")[1];
        const user = verifyToken(token);
        if (!user) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }
        req.user = user;
        console.log("Usuario autenticado en authUser:", req.user);
        next();
    }
}
export const authUser = (req, res, next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "No tienes acceso, debes iniciar sesión" });
    }

    const token = authHeader.split(" ")[1]; // Extraer el token después de "Bearer"
    const user = verifyToken(token);
    if (!user) {
        return res.status(403).json({ error: "Token inválido o expirado" });
    }

    req.user = user;
    next();
}