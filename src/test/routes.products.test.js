const assert = require('assert');
const proxyquire = require('proxyquire');

const {productsMock, ProductsServiceMock} = require('../utils/mocks/mocks');
const testServer = require('../utils/testServer');

describe('route - products', function () {

  const route = proxyquire('../routes/index', {
    '../services/index': ProductsServiceMock
  });

  const request = testServer(route);

  describe('GET / products', function () {

    it('should respond with status 200', function (done) {
      request.get('/api/products').expect(200, done);
    });

    it('should respond with the list of products', function (done) {
      request.get('/api/products').end((err, res) => {
        assert.deepEqual(res.body, {
          data: productsMock,
          message: 'Todos los productos'
        });
        done();
      });
    });

  });

});
