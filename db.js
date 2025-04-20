import mongoose from 'mongoose';
const mongoURL = 'mongodb://localhost:27017/learning';

mongoose.connect(mongoURL,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected' , () => {
    console.log('Db connected successfully.');
});
db.on('error' , () => {
    console.log('Db error fatching.');
});
db.on('disconnected' , () => {
    console.log('Db disconnected.');
});

export default db;