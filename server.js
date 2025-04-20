import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import Menu from './models/menu.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(bodyParser.json());


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT , () => { console.log('Server start....')});