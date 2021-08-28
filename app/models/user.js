const { Schema, model } = require('mongoose')

const UserSchema = Schema({
  id: { type: Number, unique: true },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

module.exports = model('User', UserSchema)