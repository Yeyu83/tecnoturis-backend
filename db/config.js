const mongoose = require('mongoose');

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://tecnoturis_user:Lagartija99@cluster0.ybml1.mongodb.net/tecnoturis')
    console.log('Connected to DB!');
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { connect }
