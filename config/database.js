const mongoose = require('mongoose');

const connectDB = async () => {

    // const conn = await mongoose.connect('mongodb+srv://user002:123@cluster0.bfxh1qb.mongodb.net/', {
    //     // useNewUrlParser: true,
    //     // useUnifiedTopology: true
    // });


    const conn = await mongoose.connect('mongodb+srv://kelly_00:kelly_00123@cluster0.le5oezp.mongodb.net/', {});

    return conn;
}

module.exports = connectDB;
        




