import { Router } from "express";
import { registerUserMiddlewares } from "./user.middlewares";
import { dataUser, createUser, todoUserList } from "./users.controller";

const usersRouter = Router()

usersRouter.post('/register-user', registerUserMiddlewares, createUser)

usersRouter.get('/dataUser/:id', dataUser)

usersRouter.get('/toDos', todoUserList)

export default usersRouter