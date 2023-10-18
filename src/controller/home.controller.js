import { findAllCategory } from '../service/category.service.js'
import { findAllProducts } from '../service/product.service.js'
import { Category } from '../model/index.js'
/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const homeGet = async (req, res) => {
  try {
    const [products, categories, laptops, desks, phons] = await Promise.all([
      findAllProducts({ limit: 8, order: [['createdAt', 'DESC']], attributes: ['name', 'description', 'price', 'image'] }),
      findAllCategory(),
      findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Laptop' } } }),
      findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Desktop' } } }),
      findAllProducts({ limit: 8, attributes: ['name', 'description', 'price', 'image'], include: { model: Category, where: { name: 'Phone' } } })
    ])
    res.render('page/home', { categories, products, laptops, desks, phons })
  } catch (error) {
    console.log(error)
    res.status(500).send('Internal Server Error')
  }
}
