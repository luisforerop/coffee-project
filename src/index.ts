import { config } from 'dotenv'
import Server from './server'
import setRoutes from './router'
import { dbConnection } from './database'

// ENV Config
config()

const app = new Server(process.env.PORT || '8080')
setRoutes(app)

dbConnection()
app.start()
