import { Router } from "express";
import { dataUser, saveUser, todoUserList } from "./users.controller";

const usersRouter = Router()

usersRouter.post('/newUser', saveUser)

usersRouter.get('/dataUser/:id', dataUser)

usersRouter.get('/toDos', todoUserList)

export default usersRouter