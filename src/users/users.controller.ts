import { RequestHandler } from "express";
import { iUser } from '../models/user'
import saveUserInDataBase from "./user.services";

export const createUser: RequestHandler = async (req, res) => {
  const body: iUser = req.body
  const { name, email, password, rol } = body
  saveUserInDataBase({
    name, email, password, rol
  })
  .then(user => {
    res.status(200).json({
      user
    })
  })
  .catch(error => {
    res.status(500).json({
      msg: 'Error'
    })
  })
}

export const dataUser: RequestHandler = (req, res) => {
  const { id } = req.params
  res.json({
    msg: 'test',
    id
  })
}

export const todoUserList: RequestHandler = (req, res) => {
  const { todos } = req.query
  res.status(200).json({
    todos
  })
}