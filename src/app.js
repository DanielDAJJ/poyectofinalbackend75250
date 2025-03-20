//*Librerias
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import 'dotenv/config';

//*Rutas
import connectDB from './config/mongoDB.config.js';
import errorHandler from './middlewares/errorHandler.js';

//*Entorno
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//*Configuración de sesiones
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));

//*Conexión a la base de datos
connectDB();

//*Passport
if(passport){
    app.use(passport.initialize());
    app.use(passport.session());
}

//*Manejo de errores
app.use(errorHandler);

//*Levantando servidor
app.listen(PORT, ()=>{
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});