const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<DB_PASSWORD>', process.env.PASSWORD);
mongoose
  .connect(DB)
  .then(() => console.log(`DB is connected successfully`))
  .catch(err => console.error('DB Connection error: ', err));

// READ JSON FILE

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () =>{
    try{
        await Tour.create(tours);
        console.log('Data successfully loaded');
        process.exit();
    }catch (err) {
        console.log(err);
    }
}

// DELETE ALL DATA FROM COLLECTIONS
const deleteData = async () =>{
    try{
        await Tour.deleteMany();
        console.log('Data successfully deleted');
        process.exit();
    }catch (err) {
        console.log(err);
    }
}
if (process.argv[2] === '--import'){
    importData();
}
else if(process.argv[2] === '--delete'){
    deleteData();
}
// console.log(process.argv);