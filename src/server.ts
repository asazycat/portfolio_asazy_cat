import express from "express";
import router from "./routes";
import cors from "cors";
import dotenv from 'dotenv';
import {create}  from 'express-handlebars';
import type {Express} from "express"
import { TechType } from "./helpers";

dotenv.config()
const port = process.env.MYSQLPORT || 5000;
const hbs = create({
    layoutsDir: __dirname + '/templates/layouts',
    extname: 'hbs',
    helpers: {
        TechType
    }
    }
);
const expressApp: Express = express();
expressApp.use(express.json());
expressApp.use(cors());
expressApp.use('/', router)
expressApp.set('views', 'templates');
expressApp.set('view engine', 'hbs');
expressApp.engine('hbs', hbs.engine)

expressApp.use(express.static("static"))
expressApp.listen(port, () => console.log(`Listening to server at http://localhost:${port}`));

