import { Router } from "express";
import { dataUser, createUser, todoUserList } from "./users.controller";

const usersRouter = Router()

usersRouter.post('/register-user', createUser)

usersRouter.get('/dataUser/:id', dataUser)

usersRouter.get('/toDos', todoUserList)

export default usersRouter