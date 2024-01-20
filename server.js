const express = require('express');
const cors = require('cors');
const Database = require('./db/config');
class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT || 3001;
        this.database = new Database();
        //Middelewares
        this.middlewares();
        //Database connection
        this.dbConnection();
    }

    async dbConnection(){
        await this.database.dbConnection();
    }

    middlewares(){
        //console.log('Hello');
        this.app.use(cors());
        //Este middleware es para recibir datos
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        //public 
        this.app.use(express.static('public'))   
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`This app is running through port ${this.port}`);
        })  
    }
}

module.exports = Server