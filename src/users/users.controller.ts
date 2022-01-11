import { RequestHandler } from "express";


export const saveUser: RequestHandler = (req, res) => {
  const { name, id } = req.body
  res.status(200).json({
    name, id
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