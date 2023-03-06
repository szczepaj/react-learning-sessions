/**
 * Mocking client-server processing
 */
import products from './products.json'

export default {
  getProducts: () => new Promise((resolve, _reject) => {
    return setTimeout(() => resolve(products), 1000)
  }),
  buyProducts: (ids = []) => new Promise((resolve, reject) => {
    if(ids?.length !== 0) {
      return setTimeout(() => resolve({ message: 'Products bought successfully'}), 1000)
    }
    return setTimeout(() => reject({ message: 'Missing products ids'}), 1000)
  })
}
