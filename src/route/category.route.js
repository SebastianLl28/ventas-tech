import { Router } from 'express'
import { getAllCategory } from '../controller/category.controller.js'

const router = Router()

router.get('/', getAllCategory)

export default router
