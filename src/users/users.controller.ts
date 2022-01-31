import { RequestHandler } from "express";
import { iUser } from '../models/user'
import { saveUserInDataBase } from "./user.services";

export const createUser: RequestHandler = async (req, res) => {
  const body: iUser = req.body
  const { name, email, password, role } = body
  saveUserInDataBase({
    name, email, password, role
  })
  .then(({statusCode, message, data}) => {
    res.status(statusCode).json({
      message,
      data
    })
  })
  .catch(error => {
    res.status(500).json({
      msg: 'Internal error',
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