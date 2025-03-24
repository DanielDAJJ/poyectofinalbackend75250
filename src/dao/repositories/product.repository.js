import ProductDao from "../product.dao.js";

class ProductRepository {
    async getAll() {
        return await ProductDao.getAll();
    }

    async getById(id) {
        return await ProductDao.getById(id);
    }

    async createProduct(productData) {
        return await ProductDao.create(productData);
    }

    async updateProduct(id, productData) {
        return await ProductDao.update(id, productData);
    }

    async deleteProduct(id) {
        return await ProductDao.delete(id);
    }
}

export default new ProductRepository();