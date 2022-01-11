import mongoose from 'mongoose'


export const dbConnection = async () => {
  const uri = `${process.env.MONGO_CCN}`
  mongoose.connect(uri)
    .then(() => {
      console.log('Data base is connected');
    })
    .catch((e) => {
      console.log(e);
      console.log(`The uri is: ${uri}`);    
      throw new Error('Error in database connection')
    })

}