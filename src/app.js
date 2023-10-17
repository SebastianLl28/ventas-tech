import express from 'express'
// import morgan from 'morgan'
import { homeRouter, categoryRouter, productRouter } from './route/index.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.set('view engine', 'pug')
app.set('views', './src/view')

// habilitar body parser
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// configuration public folder
app.use(express.static('src/public'))

// app.use(morgan('dev'))
app.use('/', homeRouter)
app.use('/api/category', categoryRouter)
app.use('/api/product', productRouter)

export default app
