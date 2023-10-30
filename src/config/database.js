const mongoose = require('mongoose');

const connnectToMongoDb = async ()  => {

    try{

        const mongodb = await mongoose.connect(process.env.MONGODB);
        console.log('Connnetion is succesfull');

    }catch(err){
        console.log(`We are having problems connecting to MongoDB  ${err}`);
    };
};

module.exports = { connnectToMongoDb };

