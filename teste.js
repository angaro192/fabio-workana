const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./router')
app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  return res.send('Hello')
})

app.listen(3000)