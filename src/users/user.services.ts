import { iUser } from "../models"
import { encrypyPassword } from "../utils"
import { UserModel } from "./user.schema"
import { iControllerResponse } from '../types'

export const saveUserInDataBase = async (userData: iUser) => {
  const { password } = userData
  userData.password = await encrypyPassword(password)

  const user = new UserModel(userData)
  return new Promise<iControllerResponse>(async (resolve, reject) => {
    try {
      await user.save()
      return resolve({
        statusCode: 200,
        message: 'User saved successfully',
        data: { user }
      })
    } catch (error) {
      console.log(error);
      return reject(error)
    }
  })
}

export const updateDataUserService = async (userData: iUser, id: string) => {
  const { password } = userData
  if (password) {
    userData.password = await encrypyPassword(password)
  }
  return new Promise<iControllerResponse>(async (resolve, reject) => {
    try {
      const newUser = await UserModel.findByIdAndUpdate(id, userData)
      return resolve({
        statusCode: 200,
        message: 'User info updated successfully',
        data: {
          ...userData
        }
      })
    } catch (error) {
      console.log(error);
      return reject(error)
    }
  })
}

// Implement conditional: Only the admin role can obtain all users

export const userWithPaginationService = async (userPerPage: number, page: number) => {
  const query = { state: true }
  const getFrom = (userPerPage: number, page: number) => userPerPage * (page - 1)

  return new Promise<iControllerResponse>(async (resolve, reject) => {
    try {
      const usersQuantity = await UserModel.countDocuments(query)
      const quantityOfPages = Math.ceil(usersQuantity / userPerPage)
      const limit: number = userPerPage
      const from: number = getFrom(userPerPage, (page > quantityOfPages ? quantityOfPages : page)) 

      const users = await UserModel.find(query)
        .skip(from)
        .limit(limit)

      return resolve({
        statusCode: 200,
        data: {
          users,
          pages: quantityOfPages,
          usersQuantity
        }
      })
    } catch (error) {
      console.log(error);
      return reject(error)
    }
  })
}

export const changeStateToDelete = async (id: string) => {
  return new Promise<iControllerResponse>(async (resolve, reject) => {
    try {
      const deletedUsers = await UserModel.findByIdAndUpdate(id, { state: false })
      return resolve({
        statusCode: 200,
        message: `${deletedUsers?.name} has been deleted.`
      })
    } catch (error) {
      return reject(error)
    }
  })
}

export const getUserInfoById = async (id: string) => {
  return new Promise<iControllerResponse>(async (resolve, reject) => {
    try {
      const userData = await UserModel.findById(id)
      return resolve({
        statusCode: 200,
        data: userData
      })
    } catch (error) {
      return reject(error)
    }
  })
} 
