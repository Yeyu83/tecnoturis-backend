express = require('express')
const cors = require('cors')
const { UserRoutes } = require('./routes/index');

const app = express()

app.use(express.json()).use(cors())

app.use('/user', UserRoutes);

module.exports = app;