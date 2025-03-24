import UserDao from "../user.dao.js";

class UserRepository{
    async findById(id){
        return await UserDao.findById(id);
    }
    async findByEmail(email){
        return await UserDao.findByEmail(email);
    }
    async create(user){
        return await UserDao.create(user);
    }
}

export default new UserRepository();