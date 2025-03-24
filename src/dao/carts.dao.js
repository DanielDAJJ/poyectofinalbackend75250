import CartModel from "./models/cart.model.js";

class CartDao{
    async getById(id){
        return await CartModel.findById(id).populate("products.product");
    }
    async createCart(userId) {
        const newCart = new CartModel({ user: userId, products: [] });
        return await newCart.save();
    }
    async addProduct(cartId, productId, quantity){
        const cart = await CartModel.findById(cartId);
        if(!cart) throw new Error ("Carrito no encontrado");
        const existingProduct = cart.products.find(p=> p.product._id.toString() === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({product: productId, quantity});
        }
        return await cart.save();
    }
    async removeProduct(cartId, productId){
        const cart = await CartModel.findById(cartId);
        if(!cart) throw new Error ("Carrito no encontrado");
        cart.products = cart.products.filter(p=> p.product._id.toString() !== productId);
        return await cart.save();
    }
    async checkout(cartId){
        const cart = await CartModel.findById(cartId);
        if(!cart) throw new Error ("Carrito no encontrado");
        cart.products = [];
        return await cart.save();
    }
}

export default new CartDao();