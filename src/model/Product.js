import db from '../config/db.js'
import { DataTypes } from 'sequelize'
const Product = db.define('product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_category: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'category',
      key: 'id'
    }
  }
}, {
  createdAt: true,
  updatedAt: true,
  freezeTableName: true
})

export default Product
