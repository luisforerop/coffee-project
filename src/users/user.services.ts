import { iUser } from "../models"
import { encrypyPassword } from "../utils"
import { UserModel } from "./user.schema"
import { iResponse } from '../types'

export const saveUserInDataBase = async (userData: iUser) => {
  const { password, email } = userData
  const hashedPassword = await encrypyPassword(password)
  userData.password = hashedPassword
  const user = new UserModel(userData)
  return new Promise<iResponse>(async (resolve, reject) => {
    try {
      await user.save()
      console.log('Usuario guardado');
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
