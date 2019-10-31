const path = require("path")
const jsonServer = require("json-server")
const bodyParser = require("body-parser")

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(router)
server.listen(3000, () => {
  console.log("Demo api server is running...")
})
