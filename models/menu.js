import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    test: {
        type: String,
        enum:['sweet','spicy','sour'],
        require: true,
    },
    is_drink:{
        type: Boolean,
        default:false
    }
});

const menu = mongoose.model('menu' , menuSchema);
export default menu;
