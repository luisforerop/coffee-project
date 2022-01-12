import bcrypt from 'bcryptjs'

const saltRounds = 10

export const encrypyPassword = (password: string) => {
  return bcrypt.hash(password, saltRounds)
} 