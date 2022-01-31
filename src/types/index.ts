type expressValidatorErrorType = {
  value: any,
  msg: string,
  param: string,
  location: string
}

export interface iResponse {
  statusCode: number,
  message?: any
  errors?: expressValidatorErrorType[]
  data?: any
}