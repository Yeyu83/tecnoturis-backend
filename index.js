express = require('express')

require('dotenv').config()

const { connect } = require('./db/config')
const cors = require('cors')

const app = express()

app.use(cors())

connect()

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}!`))