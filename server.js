const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 6970
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use("/public", express.static(__dirname + "/public"));

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
  })
})