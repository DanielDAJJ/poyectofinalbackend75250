import UserService from "../services/user.services";
import { generateToken } from "../utils/utils.js";

class UserController {
    async getUser(req, res, next){
        try{
            const user = await UserService.getUserById(req.user.id);
            if(!user) return res.status(404).json({error: "No se ha encontrado a el usuario"});
            res.status(200).json(user);
        }catch(err){
            next(err);
        }
    }
    async register(req, res, next){
        try {
            const newUser = await UserService.registerUser(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    }
    async login(req, res, next){
        try {
            const token = await UserService.loginUser(req.body.email, req.body.password);
            res.status(200).json({token});
        } catch (error) {
            next(error);
        }
    }
}

export default new UserController();