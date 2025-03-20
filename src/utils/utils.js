import { dirname } from "path";
import { fileURLToPath } from "url";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import 'dotenv/config';

export const __dirname = dirname(fileURLToPath(import.meta.url));

//*Encriptación
export const createHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

//*Validacion password
export const isValidPassword = (password, userPassword) =>{
    return bcrypt.compareSync(password, userPassword);
}

//*Tokens
export const generateToken = (user) => { 
    return jwt.sign(
        {
            id: user._id, email: user.email, role: user.role 
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );
}

//* verificar token
export const verifyToken = (token) =>{
    try {
        return jwt.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        return null;
    }
}
