import express from 'express';
import Person from './../models/person.js';
const router = express.Router();


router.get('/', async(req , res) => {
  try{
    const person = await Person.find();
    console.log('person fatch successfully.');
    res.status(200).json(person);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Data not get'});
  }
})

// for testing

router.post('/', async (req , res) => {
  try{
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('saved.');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Data not insert'});
  }
})


router.get('/:type' , async(req , res) => {
  try{
    const type = req.params.type;
    if(type == 'chef' || type == 'owner' || type == 'manager'){
      const getData = await Person.find({work: type});
      console.log('data successfully.');
      res.status(200).json(getData);

    }else{
      res.status(404).json({'error' : 'Invalide url'});
    }
  }catch(err){
    res.status(500).json({error: 'Data not get'});
  }
})

router.put('/:id' , async(req , res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const response = await Person.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });
        
        if(!response){
            return res.status(400).json({error: 'Data not fount'});
        }
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Data not insert'});
    }
})

router.delete('/:id' , async(req , res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const response = await Person.findByIdAndDelete(id);

        if(!response){
            return res.status(400).json({error: 'Data not fount'});
        }
        console.log('Data delete successfully');
        res.status(200).json({message : 'Person deleted successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Data not insert'});
    }
})

export default router;