require('dotenv').config()
const { connect } = require('./db/config')
const app = require('./app/app');

connect()

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}!`))