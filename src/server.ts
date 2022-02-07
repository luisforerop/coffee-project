import express, { Express, Router, } from 'express'
import cors from 'cors'

class Server {
  private _app: Express
  private port: string

  constructor(port: string) {
    this._app = express()
    this.port = port
    this.middleware()
  }

  setRoutes(path: string, router: Router) {
    this._app.use(path, router)
  }

  middleware ( ) {
    this._app.use( express.json() )
    this._app.use( cors() )
    this._app.use( express.static(`D:/develop-projects/web-server/public`) )
  }

  start() {
    return this._app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    })
  }

  get app() {
    return this._app
  }
}

export default Server