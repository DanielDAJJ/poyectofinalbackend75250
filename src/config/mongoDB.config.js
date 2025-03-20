import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    await mongoose.connect(process.env.URL_MONGO,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log(`Estamos en linea con MongoDB`))
    .catch(error => console.error(`Error al conectar con MongoDB: ${error}`));
}

export default connectDB;