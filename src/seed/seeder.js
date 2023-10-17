// import categories from './categories.js'
// import Category from '../model/Category.js'
import products from './product.seeder.js'
import Products from '../model/Product.js'
import db from '../config/db.js'
import { exit } from 'browser-sync'

const importarDatos = async () => {
  try {
    await db.authenticate()
    await db.sync()
    // await Category.bulkCreate(categories)
    await Products.bulkCreate(products)
    console.log('Datos importados correctamente')
    exit()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

if (process.argv[2] === '-i') {
  importarDatos()
}
