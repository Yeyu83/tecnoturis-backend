express = require('express')
require('dotenv').config()
const { connect } = require('./db/config')

const app = express()

connect()

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}!`))