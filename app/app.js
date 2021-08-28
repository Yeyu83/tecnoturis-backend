express = require('express')
const cors = require('cors')
const { UserRoutes } = require('./routes/index');

const app = express()

app.use(cors())

app.use("/user", UserRoutes);

module.exports = app;