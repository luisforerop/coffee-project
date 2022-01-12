type Rol = 'ADMIN' | 'USER' 

export interface iUser {
  name: string
  email: string
  password: string
  profileImage: string
  rol: Rol
  state: boolean
  googleAccount: boolean
}