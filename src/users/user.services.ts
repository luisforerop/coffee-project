import { iUser } from "../models"
import { UserModel } from "./user.schema"

const saveUserInDataBase = async (userData: iUser) => {
  const user = new UserModel( userData )
  return new Promise( async ( resolve, reject ) => {
    console.log('Saving user');
    
    try {
      await user.save()
      console.log('Usuario guardado');    
      return resolve(user)
    } catch (error) {
      console.log(error);
      
      return reject(error)
    }
  })
}

export default saveUserInDataBase