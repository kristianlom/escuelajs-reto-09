const MongoLib = require('../lib/mongo');

class ProductService {

  constructor() {
    this.collection = 'products';
    this.mongoDB = new MongoLib();
  }

  async getProducts({tags} = {}) {
    const query = tags && {tags: {$in: tags}};
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }
}

module.exports = ProductService;
