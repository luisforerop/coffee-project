import { model, Schema } from 'mongoose'
import { iUser } from '../models/user'

const userSchema = new Schema<iUser>({
  name: { type: String, required: [true, 'The name is required'] },
  email: { type: String, required: [true, 'The email is required'], unique: true },
  password: { type: String, required: [true, 'The password is required'] },
  profileImage: String,
  rol: {
    type: String,
    required: true,
    enum: ['ADMIN', 'USER'],
  },
  state: { type: Boolean, default: true },
  googleAccount: { type: Boolean, default: false },
})

export const UserModel = model<iUser>('User', userSchema)