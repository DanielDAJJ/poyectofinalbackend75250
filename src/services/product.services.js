import ProductRepository from "../dao/repositories/product.repository.js";

class ProductService{
    async getAllProducts(){
        return await ProductRepository.getAll();
    }
    async getProductbyId(id){
        return await ProductRepository.getById(id);
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