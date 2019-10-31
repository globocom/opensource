const path = require("path")
const jsonServer = require("json-server")
const bodyParser = require("body-parser")

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults()

server.use(middlewares)

// server.get("/user", (req, res, next) => {
//   if (
//     !req.headers.cookie ||
//     req.headers.cookie.indexOf("logged_in=yes") === -1
//   ) {
//     res.sendStatus(401)
//   } else {
//     next()
//   }
// })

server.use(bodyParser.text())
server.post("/subscribe", (req, res, next) => {
  const data = JSON.parse(req.body)
  const db = router.db
  const user = db
    .get("user")
    .cloneDeep()
    .value()

  user.result = {
    ...user.result,
    ...data,
  }

  db.get("user")
    .assign(user)
    .write()

  res.status(201).jsonp(db.get("user").value())
})

server.use(router)
server.listen(3000, () => {
  console.log("Demo api server is running...")
})
