import { RequestHandler, Router } from "express";
import Server from "../server";
import usersRouter from "../users/users.routes";

const notFound = Router()

notFound.get('*', (_, res) => {
  res.status(404).json({
    errors: [{
      msg: 'The resource you are looking for does not exist or has moved to another location.'
    }]
  })
})

const setRoutes = (server: Server) => {
  server.setRoutes('/users', usersRouter)
  server.setRoutes('', notFound)
}

export default setRoutes