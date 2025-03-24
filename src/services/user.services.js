import UserRepository from "../dao/repositories/user.repository.js";
import { createHash, isValidPassword, generateToken } from "../utils/utils.js";

class UserService{
    async getUserById(id){
        return await UserRepository.findById(id);
    }
    async registerUser(userData){
        const existingUser = await UserRepository.findByEmail(userData.email);
        if(existingUser) throw new Error("el usuario ya existe");
        userData.password = createHash(userData.password);
        userData.role = userData.role === "admin" ? "admin" : "user";
        return await UserRepository.create(userData);
    }
    async loginUser(email, password){
        const user = await UserRepository.findByEmail(email);
        if(!user || !isValidPassword(password, user.password)) throw new Error("credenciales incorrectas");
        return generateToken(user);
    }
}

export default new UserService();