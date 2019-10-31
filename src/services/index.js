const MongoLib = require('../lib/mongo');

class ProductService {

  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts({tags}={}) {
    const query = tags && {tags: {$in: tags}};
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getProduct({productId}) {
    const product = await this.mongoDB.get(this.collection, productId);
    return product || [];
  }

  async createProduct({product}) {
    const createProduct = await this.mongoDB.create(this.collection, product);
    return createProduct || [];
  }

  async updateProduct({productId, product} = {}) {
    const updateProduct = await this.mongoDB.update(this.collection, productId, product);
    return updateProduct || [];
  }

  async deleteProduct({productId}) {
    const productDelete = await this.mongoDB.delete(this.collection, productId);
    return productDelete || [];
  }
}

module.exports = ProductService;
