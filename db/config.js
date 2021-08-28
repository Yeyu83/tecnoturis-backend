const mongoose = require('mongoose');
require('dotenv').config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Connected to DB!');
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { connect }
