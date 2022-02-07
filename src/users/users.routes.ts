import { Router } from "express";
import { deleteUserMiddleware, getDataUserMiddleware, registerUserMiddlewares, updateDataUserMiddlewares } from "./user.middlewares";
import { dataUser, createUser, userWithPagination, updateDataUser, deleteUser } from "./users.controller";

const usersRouter = Router()

usersRouter.post('/register-user', registerUserMiddlewares, createUser)

usersRouter.put('/update-data-user/:id', updateDataUserMiddlewares, updateDataUser)

usersRouter.delete('/delete-user/:id', deleteUserMiddleware, deleteUser)

usersRouter.get('/data-user/:id', getDataUserMiddleware, dataUser)

usersRouter.get('/', userWithPagination)

export default usersRouter