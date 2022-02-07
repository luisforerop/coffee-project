import { RequestHandler } from "express";
import { iUser } from '../models/user'
import { iResponse } from "../types";
import { saveUserInDataBase, updateDataUserService, userWithPaginationService, changeStateToDelete, getUserInfoById } from "./user.services";

// Implement JOI for strict validations


export const createUser: RequestHandler<any, iResponse, iUser> = async (req, res) => {
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
      message: 'Internal error',
    })
  })
}

export const dataUser: RequestHandler<any, iResponse, iUser> = (req, res) => {
  const { id } = req.params
  getUserInfoById(id)
  .then(({statusCode, data, message}) => {
    res.status(statusCode).json({
      message,
      data
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Internal error',
    })
  })
}

export const updateDataUser: RequestHandler<any, iResponse, iUser> = (req, res) => {
  const { id } = req.params
  
  const { state, googleAccount, ...userData } = req.body
  updateDataUserService(userData, id)
    .then(({statusCode, data, message}) => {
      res.status(statusCode).json({
        message,
        data
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Internal error',
      })
    })
}

export const userWithPagination: RequestHandler = (req, res) => {
  const { usersPerPage = 5, page = 1 } = req.query
  const userPerPageParsed: number = Number(usersPerPage) > 0 ? Number(usersPerPage) : 5 
  const pageParsed: number = Number(page) > 0 ? Number(page) : 1

  userWithPaginationService(userPerPageParsed, pageParsed)
    .then(({statusCode, data, message}) => {
      res.status(statusCode).json({
        message,
        data
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Internal error',
      })
    })
}

export const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params
  changeStateToDelete(id)
    .then(({statusCode, data, message}) => {
      res.status(statusCode).json({
        message,
        data
      })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Internal error',
      })
    })
}