import Product from '../model/Product.js'

export const findAllProducts = async (query = {}) => {
  try {
    return await Product.findAll(query)
  } catch (err) {
    throw new Error(err)
  }
}
