import CartService from "../services/cart.services.js";

class CartController {
    async getCartById(req, res, next) {
        try {
            const cart = await CartService.getCartById(req.params.id);
            if(!cart) res.status(404).json({message: "Carrito no encontrado"});
            res.status(200).json({cart});
        } catch (error) {
            next(error);
        }
    }
    async createCart(req, res, next) {
        try {
            const userId = req.user.id;
            const cart = await CartService.createCart(userId);
            res.status(201).json(cart);
        } catch (error) {
            next(error);
        }
    }
    async addProductToCart(req, res, next) {
        try {
            const { cartId, productId, quantity } = req.body;
            const updateCart = await CartService.addProductToCart(cartId, productId, quantity);
            res.status(200).json({updateCart});
        } catch (error) {
            next(error);
        }
    }
    async removeProductFromCart(req, res, next) {
        try {
            const { cartId, productId } = req.body;
            const updateCart = await CartService.removeProductFromCart(cartId, productId);
            res.status(200).json({updateCart});
        } catch (error) {
            next(error);
        }
    }
    async Checkout(req, res, next) {
        try {
            const ticket = await CartService.checkout(req.params.cartId);
            res.status(200).json({ticket});
        } catch (error) {
            next(error);
        }
    }
}

export default new CartController();