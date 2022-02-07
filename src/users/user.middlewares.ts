import { RequestHandler } from "express";
import { check, validationResult } from "express-validator";
import { emailRegistered, roleValidator, updateRoleValidator, userIdExist } from "../database/validators";

const validatorMiddlewares: RequestHandler = ( req, res, next ) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json(errors)
  }
  next()
}

const isExistenceValidations = [
  check('id', 'It is not a valid mongoId').isMongoId(),
  check('id').custom(userIdExist), 
]

export const registerUserMiddlewares = [
  check('email', 'The email is not valid.').isEmail(),
  check('password', 'The password must be at least 8 characters long.').isLength({ min: 8 }),
  check('name', 'The username is required.').not().isEmpty(),
  check('email', 'The email exist').custom(emailRegistered),
  check('role', 'It is not a valid role.').custom(roleValidator), 
  validatorMiddlewares,
] 

export const updateDataUserMiddlewares = [
  ...isExistenceValidations,
  check('role').custom(updateRoleValidator), 
  check('email', 'You can not update the email using this endpoint. Please, check the documentation.').isEmpty(),
  validatorMiddlewares,
]

export const deleteUserMiddleware = [
  ...isExistenceValidations,
  validatorMiddlewares,
]