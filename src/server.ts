import express, { Express, Router } from 'express'
import cors from 'cors'

class Server {
  private app: Express
  private port: string

  constructor(port: string) {
    this.app = express()
    this.port = port
    this.middleware()
  }

  setRoutes(path: string, router: Router) {
    this.app.use(path, router)
  }

  middleware ( ) {
    this.app.use( express.json() )
    this.app.use( cors() )
    this.app.use( express.static(`D:/DEVELOP PROJECTS/web-server/public`) )
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    })
  }

}

export default Server