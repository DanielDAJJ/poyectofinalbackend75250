import ProductService from "../services/product.services.js";

class ProductController {
    async getAllProducts(req, res, next) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }
    async getProductById(req, res, next) {
        try {
            const product = await ProductService.getProductbyId(req.params.id);
            if (!product) return res.status(404).json({ error: "Producto no encontrado" });
            res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        try {
            const newProduct = await ProductService.createProduct(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const updateProduct = await ProductService.updateProduct(req.params.id, req.body);
            if (!updateProduct) return res.status(404).json({ error: "Producto no encontrado" });
            res.status(200).json(updateProduct);
        } catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next){
        try {
            const deleteProduct = await ProductService.deleteProduct(req.params.id);
            if (!deleteProduct) return res.status(404).json({ error: "Producto no encontrado" });
            res.status(200).json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            next(error);
        }
    }
}

export default new ProductController();