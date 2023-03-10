const moongose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = moongose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};


module.exports = connectDB;