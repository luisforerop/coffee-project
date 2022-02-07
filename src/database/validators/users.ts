import { CustomValidator } from "express-validator"
import { UserModel } from "../../users/user.schema"

//Validation for out bussiness logic. Implement JOI 
export const emailRegistered: CustomValidator = async ( email: string ) => {
  const existEmail = await UserModel.findOne({ email })
  if (existEmail) {
		throw new Error(`The email ${email} already exists.`)
  }
}

export const userIdExist: CustomValidator = async (id: string) => {
	const existUser = await UserModel.findById(id)
	if(!existUser || !existUser.state) throw new Error(`There is no user with the id ${id} or possibly the user has unsubscribed .`)
}
