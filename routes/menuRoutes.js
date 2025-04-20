import express from 'express';
import Menu from '../models/menu.js';
const router = express.Router();


router.get('/', async(req , res) => {
  try{
    const menu = await Menu.find();
    console.log('menu fatch successfully.');
    res.status(200).json(menu);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Data not get'});
  }
})

router.post('/', async (req , res) => {
  try{
    const data = req.body;
    const newMenu = new Menu(data);
    const response = await newMenu.save();
    console.log('saved.');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Data not insert'});
  }
})


export default router;