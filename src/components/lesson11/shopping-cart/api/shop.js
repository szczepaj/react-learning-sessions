/**
 * Mocking client-server processing
 */
import products from './products.json'

export default {
  getProducts: () => Promise.resolve(products),
  buyProducts: (ids = []) => {
    if(ids?.length !== 0) {
      return Promise.resolve({ message: 'Products bought successfully'})
    }
    return Promise.reject({ message: 'Missing products ids'})
  }
}
