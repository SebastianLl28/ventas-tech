import { findAllCategory } from '../service/category.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const homeGet = async (req, res) => {
  const categories = await findAllCategory()
  res.render('page/home', { categories })
}
