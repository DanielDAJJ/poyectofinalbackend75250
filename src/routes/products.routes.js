import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import { authRole } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", authRole("admin"), ProductController.createProduct);
router.put("/:id", authRole("admin"), ProductController.updateProduct);
router.delete("/:id", authRole("admin"), ProductController.deleteProduct);

export default router;