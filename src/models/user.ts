type Rol = 'ADMIN' | 'USER' 

interface iUser {
  name: string
  email: string
  password: string
  profileImage: string
  rol: Rol
  state: boolean
  googleAccount: boolean
}