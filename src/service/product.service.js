import Product from '../model/Product.js'

export const findAllProducts = async () => {
  try {
    return await Product.findAll()
  } catch (err) {
    throw new Error(err)
  }
}
