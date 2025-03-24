import CartRepository from '../dao/repositories/cart.repository.js';

class CartService{
    async getCartById(id){
        return await CartRepository.getCartById(id);
    }
    async createCart(userId) {
        return await CartDao.createCart(userId);
    }
    async addProductToCart(cartId, productId, quantity){
        if(quantity <= 0) throw new Error("La cantidad debe ser mayor a 0");
        const cart = await CartRepository.getCartById(cartId);
        if (!cart) {
            throw new Error("Carrito no encontrado");
        }
        const existingProduct = cart.products.find(p => p.product.toString() === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity; // Sumamos la cantidad
        } else {
            cart.products.push({ product: productId, quantity });
        }
        return await CartRepository.updateCart(cartId, cart);
    }
    async removeProductFromCart(cartId, productId) {
        return await CartRepository.removeProduct(cartId, productId);
    }
    async checkout(cartId) {
        return await CartRepository.checkout(cartId);
    }
}

export default new CartService();