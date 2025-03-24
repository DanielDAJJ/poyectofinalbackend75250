import {Router} from "express";
import CartController from "../controllers/cart.controller.js";
import {authUser} from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:cartId", authUser, CartController.getCartById);
router.post("/add", authUser, CartController.addProductToCart);
router.post("/remove", authUser, CartController.removeProductFromCart);
router.post("/checkout/:cartId", authUser, CartController.Checkout);

export default router;