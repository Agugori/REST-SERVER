import express from 'express';
import cors from 'cors';
import routes from '../routes/userRoutes.js';
import dbConnection from '../database/config.js';

class Server {

    constructor() {  
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios'

        //Conectar a DB
        this.connectDB();

        //Middleware
        this.middlewares();
        
        //Rutas de mi aplicacion
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }
    
    middlewares() {
        this.app.use(cors ())

        this.app.use(express.json())

        this.app.use( express.static('public'))
    }

    routes() {
        this.app.use(this.userPath, routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor funcionando en el puerto: ', this.port)
        })
    }
}


export default Server;