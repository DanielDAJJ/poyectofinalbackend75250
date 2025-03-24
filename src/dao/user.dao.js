import UserModel from "./models/user.model.js";

class UserDao{
    async findById(id){
        return UserModel.findById(id);
    }
    async findByEmail(email){
        return UserModel.findOne({email});
    }
    async create(userData){
        return UserModel.create(userData);
    }
}

export default new UserDao();