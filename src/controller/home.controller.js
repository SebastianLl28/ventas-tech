import { findAllCategory } from '../service/category.service.js'
import { findAllProducts } from '../service/product.service.js'
import { Category } from '../model/index.js'
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const homeGet = async (req, res) => {
  const products = await findAllProducts({ limit: 8, order: [['createdAt', 'DESC']], attributes: ['name', 'description', 'price', 'image'] })
  const categories = await findAllCategory()
  const laptops = await findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Laptop' } } })
  const desks = await findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Desktop' } } })
  const phons = await findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Phone' } } })
  res.render('page/home', { categories, products, laptops, desks, phons })
}
