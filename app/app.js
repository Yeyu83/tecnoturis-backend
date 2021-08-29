const express = require('express')
const cors = require('cors')
const compression = require('compression')

const { UserRoutes, HotelRoutes } = require('./routes/index')

const app = express()

app.use(express.json()).use(cors()).use(compression())

app.use('/hotel', HotelRoutes)
app.use('/user', UserRoutes)

module.exports = app;