const mongoose = require("mongoose")

const schema = mongoose.Schema({
  name: {
    type: String,
    min: 6,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model("Location", schema)