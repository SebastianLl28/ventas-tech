import { Category } from '../model/index.js'

export const findAllCategory = async () => {
  try {
    return await Category.findAll()
  } catch (err) {
    throw new Error(err)
  }
}
