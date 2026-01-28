import express from "express";
import router from "./routes";
import cors from "cors";
import dotenv from 'dotenv';
import {engine}  from 'express-handlebars';
import type {Express} from "express"

dotenv.config()
const port = process.env.MYSQLPORT || 5000;

const expressApp: Express = express();
expressApp.use(express.json());
expressApp.use(cors());
expressApp.use('/', router)
expressApp.set('views', 'templates');
expressApp.set('view engine', 'hbs');
expressApp.engine('hbs', engine({
    layoutsDir: __dirname + '/templates/layouts',
    extname: 'hbs'
    }
))

expressApp.use(express.static("static"))
expressApp.listen(port, () => console.log(`Listening to server at http://localhost:${port}`));

