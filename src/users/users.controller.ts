import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { iUser } from '../models/user'
import { saveUserInDataBase } from "./user.services";

export const createUser: RequestHandler = async (req, res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  const body: iUser = req.body
  const { name, email, password, rol } = body
  saveUserInDataBase({
    name, email, password, rol
  })
  .then(({statusCode, message}) => {
    res.status(statusCode).json({
      message
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