express = require('express')
const { connect } = require('./db/config')

const app = express()

connect()

app.listen(3000, () => console.log('Server running!'))