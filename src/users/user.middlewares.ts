import { check } from "express-validator";

export const registerUserMiddlewares = [
  check('email', 'The email is not valid').isEmail(),
  check('password', 'The password must be at least 8 characters long').isLength({ min: 8 }),
  check('name', 'The username is required').not().isEmpty(),
  check('rol', 'It is not a valid rol').isIn(['ADMIN', 'USER'])
] 