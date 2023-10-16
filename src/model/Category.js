import db from '../config/db.js'
import { DataTypes } from 'sequelize'
const Category = db.define('category', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: true,
  updatedAt: true,
  freezeTableName: true
})

export default Category
