const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const mongo = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
let db

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("grupp2")
    users = db.collection("users")
  }
)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(express.static("public"))
const port = 3001

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get("/api/users", (req, res) => {
  users.find().toArray((err, items) => {
    if (err) throw err
    res.json({ users: items })
  })
})

app.post("/api/users", (req, res) => {
  let username = req.body.username
  let password = req.body.password

  users.insertOne(
    {
      username: username,
      password: password,
    },
    (err, result) => {
      if (err) throw err
      console.log(result)
      res.json({ ok: true })
    }
  )
})
