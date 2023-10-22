const express = require('express')
const app = express();
const port = 8080
const router = require('./routes/index.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = {app, server}

