const app = require('express')()
const mongoose = require('mongoose')
require('./mongo')
require('./funql-api')(app)

const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

app.use(
  session({
    secret: process.env.SESION_SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
)

module.exports = app
