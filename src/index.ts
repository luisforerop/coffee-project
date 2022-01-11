import { config } from 'dotenv'
import Server from './server'
import setRoutes from './router'

config()

const server = new Server(process.env.PORT || '8080')
setRoutes(server)

server.start()
