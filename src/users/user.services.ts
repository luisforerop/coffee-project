import { Model } from "mongoose"
import { iUser } from "../models"
import { encrypyPassword } from "../utils"
import { UserModel } from "./user.schema"

type expressValidatorErrorType = {
  value: any,
  msg: string,
  param: string,
  location: string
}

export interface iResponse {
  statusCode: number,
  message?: any
  errors?: expressValidatorErrorType[]
}

//Validation for out bussiness logic. Implement JOI 

const emailRegistered = async (User: Model<any>, email: string, resolve: (res: iResponse | PromiseLike<iResponse>) => void) => {
  const existEmail = await User.findOne({ email })
  if (existEmail) {
    return resolve({
      statusCode: 400,
      errors: [{
        value: email,
        msg: 'This email has already been registered',
        location: 'body',
        param: 'email'
      }]
    })
  }
}

export const saveUserInDataBase = async (userData: iUser) => {
  const { password, email } = userData
  const hashedPassword = await encrypyPassword(password)
  userData.password = hashedPassword
  const user = new UserModel(userData)
  return new Promise<iResponse>(async (resolve, reject) => {
    
    await emailRegistered(UserModel, email, resolve)
    console.log('Saving user');

    try {
      await user.save()
      console.log('Usuario guardado');
      return resolve({
        statusCode: 200,
        message: 'Usuario guardado con éxito'
      })
    } catch (error) {
      console.log(error);

      return reject(error)
    }
  })
}
