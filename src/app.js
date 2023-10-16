import express from 'express'
// import morgan from 'morgan'
import { homeRouter, categoryRouter } from './route/index.js'

const app = express()

app.set('view engine', 'pug')
app.set('views', './src/view')

// configuration public folder
app.use(express.static('src/public'))

// app.use(morgan('dev'))
app.use('/', homeRouter)
app.use('/api/category', categoryRouter)

export default app
