import mongoose from "mongoose";

const dbConnection = async () => {

    try {
       await mongoose.connect( process.env.MONGODB_CNN, {
           useNewUrlParser: true,
           useUnifiedTopology: true
       })

       console.log('Base de datos ONLINE')
    } catch (error) {
        console.log(error)
        console.log('Error en la coneccion')
    }
}

export default dbConnection;