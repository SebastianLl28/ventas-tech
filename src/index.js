import app from './app.js'
import db from './config/db.js'
import 'dotenv/config'

async function initDb () {
  try {
    await db.authenticate()
    console.log('Database connected')
  } catch (error) {
    throw new Error(error)
  }
}

initDb()

const port = process.env.PORT
app.listen(port, () => {
  console.log('Server is up on http://localhost:' + port)
})
