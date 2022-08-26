const locationRouter = require("express").Router()
const User = require("../models/user")

locationRouter.get("/", (req, res) => {
  res.send("creating")
})

locationRouter.post("/", async (req, res) => {
  const newTask = new User({
    name: req.body.name,
  })
  const savedTask = await newTask.save()
  res.send(savedTask)
})

locationRouter.put("/:id", async (req, res) => {
  res.send("creating")

})

locationRouter.delete("/:id", async (req, res) => {
  res.send("creating")

})

module.exports = locationRouter