const express = require('express')
const morgan = require('morgan')
const config = require('./config')
const cors = require('cors')
const clientsRouter = require('./modules/clients/routes')
const loginRouter = require('./modules/clients/login')
const registerRouter = require('./modules/clients/register')
const teacherRouter = require('./modules/teacher/routes')
const errors = require('./red/errors')

//create ap with express
//DOC: https://expressjs.com/
const app = express()

//middleware
app.use(morgan('dev'))
app.use(express.json())

//configurations
app.set('port', config.app.port)

//CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options. DOC: https://www.npmjs.com/package/cors
app.use(cors())


//routes clients for test

app.use('/api/clients', clientsRouter)
app.use('/api/login', loginRouter)
app.use('/api/register', registerRouter)
app.use('/api/teacher', teacherRouter)
app.use(errors)


module.exports = app