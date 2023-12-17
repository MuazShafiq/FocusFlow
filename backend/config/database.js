const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://muazshafiq18:vO5D8ngSvkt5DuuG@cluster0.iqxdiwg.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
//mongodb+srv://muazshafiq18:vO5D8ngSvkt5DuuG@cluster0.iqxdiwg.mongodb.net/?retryWrites=true&w=majority
//mongodb://muazshafiq18:vO5D8ngSvkt5DuuG@localhost:27017/yourdatabase