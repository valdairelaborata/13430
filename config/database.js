const mongoose = require('mongoose');

const connectDB = async () => {

    const conn = await mongoose.connect('mongodb+srv://user002:123@cluster0.bfxh1qb.mongodb.net/', {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });

    return conn;
}

module.exports = connectDB;
        




