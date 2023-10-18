import Category from './Category.js'
import Product from './Product.js'

Category.hasMany(Product)
Product.belongsTo(Category, { foreignKey: 'id_category' })

export { Category, Product }
