const mongoose = require('mongoose');

module.exports.connectionToDatabase = async () => {
  try {
    await mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
  }
  catch (err) {
    console.log('Error to connecting to database');
  }
}