const userRouter = require("express").Router()
const User = require("../models/user")
const Location = require("../models/location")

userRouter.get("/", (req, res) => {
  const name = req.query.name
  if (name) {
    const Sname = new RegExp(name, 'i')
    User.find({ name: Sname })
      .populate('location')
      .exec(function (err, user) {
        if (!err) {
          res.send(user)
        }
        else {
          res.send(err)
        } 
      });
  }
})

userRouter.post("/", async (req, res) => {
  const newLocation = new Location({
    name: req.body.locationName,
  })
  await newLocation.save()
  const newUser = new User({
    name: req.body.name,
    location: newLocation
  })
  const savedTask = await newUser.save()
  res.send(savedTask)
})

userRouter.put("/:id", async (req, res) => {
  res.send("creating")

})

userRouter.delete("/:id", async (req, res) => {
  res.send("creating")

})

module.exports = userRouter