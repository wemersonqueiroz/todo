const express = require("express")
const bodyParser = require("body-parser")

const app = express()

//Setting app to use public folder so we can use CSS.

app.use(express.static(__dirname + "/public"))

let newTasks = []

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
  var today = new Date()
  //this option variable is to configure
  // how to display the date at var day
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  }

  let day = today.toLocaleDateString("en-US", options)
  //kindOfDay and newListItems are the connection where day and newTasks
  //content will be rendered at the list.ejs file.
  // "Key : Content"
  res.render("list", { kindOfDay: day, newListItems: newTasks })
})

app.post("/", function (req, res) {
  newItemTask = req.body.newItem

  newTasks.push(newItemTask)
  res.redirect("/")
})
app.listen(3000, function () {
  console.log("Server is Running on port 3000")
})
