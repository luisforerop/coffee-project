type expressValidatorErrorType = {
  value: any,
  msg: string,
  param: string,
  location: string
}

export interface iResponse {
  message?: any
  errors?: expressValidatorErrorType[]
  data?: any
}

export interface iControllerResponse extends iResponse {
  statusCode: number
}