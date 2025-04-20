import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    age: {
        type: Number,
    },
    work: {
        type: String,
        enum: ['chef','owner','manager'],
        require: true
    },
    mobile: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        require: true,
    }
});

const Person = mongoose.model('person' , personSchema);
export default Person;
