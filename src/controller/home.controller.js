import { findAllCategory } from '../service/category.service.js'
import { findAllProducts } from '../service/product.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const homeGet = async (req, res) => {
  const products = await findAllProducts({ limit: 8, order: [['createdAt', 'DESC']], attributes: ['name', 'description', 'price', 'image'] })
  const categories = await findAllCategory()
  res.render('page/home', { categories, products })
}
