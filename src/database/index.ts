import { connect } from 'mongoose'


export const dbConnection = async () => {
  const uri = `${process.env.MONGO_CCN}`
  connect(uri)
    .then(() => {
      console.log('Data base is connected');
    })
    .catch((e) => {
      console.log(e);
      console.log(`The uri is: ${uri}`);    
      throw new Error('Error in database connection')
    })

}