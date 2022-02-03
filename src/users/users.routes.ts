import { Router } from "express";
import { registerUserMiddlewares, updateDataUserMiddlewares } from "./user.middlewares";
import { dataUser, createUser, userWithPagination, todoUserList, updateDataUser } from "./users.controller";

const usersRouter = Router()

usersRouter.post('/register-user', registerUserMiddlewares, createUser)

usersRouter.put('/update-data-user/:id', updateDataUserMiddlewares, updateDataUser)

usersRouter.get('/data-user/:id', dataUser)

usersRouter.get('/', userWithPagination)

export default usersRouter