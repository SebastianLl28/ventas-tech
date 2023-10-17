import { findAllCategory } from '../service/category.service.js'

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
*/
export const getAllCategory = async (req, res) => {
  try {
    const categories = await findAllCategory()
    return res.status(200).json(categories)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
