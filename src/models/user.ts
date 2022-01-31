import { roleType } from "./role"


export interface iUser {
  name: string
  email: string
  password: string
  profileImage?: string
  role: roleType
  state?: boolean
  googleAccount?: boolean
}