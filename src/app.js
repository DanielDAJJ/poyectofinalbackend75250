//*Librerias
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import 'dotenv/config';

//*Rutas
import connectDB from './config/mongoDB.config.js';
import userRouter  from './routes/user.routes.js';
import productsRouter from './routes/products.routes.js';
import cartRouter from './routes/cart.routes.js';
import errorHandler from './middlewares/errorHandler.js';

//*Entorno
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//*app routes
app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartRouter);

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