import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import Menu from './models/menu.js';
import personRoutes from './routes/personRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
const app = express();
app.use(bodyParser.json());


app.use('/person',personRoutes);
app.use('/menu',menuRoutes);

app.listen(3000 , () => { console.log('Server start....')});