import { RequestHandler, Router } from "express";
import Server from "../server";
import usersRouter from "../users/users.routes";

const notFound = Router()

notFound.get('*', (_, res) => {
  res.sendFile(`D:/develop-projects/web-server/public/404.html`) // Pendiente regex para sacar el path sin src
})

const test: RequestHandler = (req, res) => {
  res.status(400)
}
 

notFound.get('', test)

const setRoutes = (server: Server) => {
  server.setRoutes('/users', usersRouter)
  server.setRoutes('', notFound)
}

export default setRoutes