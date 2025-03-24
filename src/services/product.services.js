import ProductRepository from "../dao/repositories/product.repository.js";

class ProductService{
    async getAllProducts(){
        const products = await ProductRepository.getAll();
        return products.length > 0 ? products : [];
    }
    async getProductbyId(id){
        if(!id) throw new Error("Falta el id del producto");
        const product = await ProductRepository.getById(id);
        return product || [];
    }
    async createProduct(productData){
        if(!productData.name || !productData.price) throw new Error("faltan datos");
        return await ProductRepository.createProduct(productData);
    }
    async updateProduct(id, productData){
        if(!productData.name || !productData.price) throw new Error("faltan datos");
        return await ProductRepository.updateProduct(id, productData);
    }
    async deleteProduct(id){
        return await ProductRepository.deleteProduct(id);
    }  
}

export default new ProductService();