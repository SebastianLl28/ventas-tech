import Category from '../model/Category.js'

export const findAllCategory = async () => {
  try {
    return await Category.findAll()
  } catch (err) {
    throw new Error(err)
  }
}
