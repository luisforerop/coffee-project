import { model, Schema, Document } from 'mongoose'
import { iUser } from '../models/user'

interface connectorUser extends Document, iUser {

}

const userSchema = new Schema<connectorUser>({
  name: { type: String, required: [true, 'The name is required'] },
  email: { type: String, required: [true, 'The email is required'], unique: true },
  password: { type: String, required: [true, 'The password is required'] },
  profileImage: String,
  role: { type: String, required: true },
  state: { type: Boolean, default: true },
  googleAccount: { type: Boolean, default: false },
})

userSchema.methods.toJSON = function () {
  const { __v, password, state, googleAccount, ...user } = this.toObject()
  return user
}

export const UserModel = model<connectorUser>('User', userSchema)