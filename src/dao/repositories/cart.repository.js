import CartDao from "../dao/carts.dao.js";

class CartRepository {
    async getCartById(id) {
        return await CartDao.getById(id);
    }

    async addProduct(cartId, productId, quantity) {
        return await CartDao.addProduct(cartId, productId, quantity);
    }

    async removeProduct(cartId, productId) {
        return await CartDao.removeProduct(cartId, productId);
    }

    async checkout(cartId) {
        return await CartDao.checkout(cartId);
    }
}

export default new CartRepository();