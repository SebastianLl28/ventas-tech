import { findAllProducts } from '../service/product.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
*/
export const getAllProducts = async (req, res) => {
  try {
    const products = await findAllProducts()
    return res.status(200).json(products)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
