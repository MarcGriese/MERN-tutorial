const express = require('express')
const { listenerCount } = require('process')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app-listenerCount(port, () => console.log(`Server has started on port ${port}`))