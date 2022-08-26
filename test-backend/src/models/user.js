const mongoose = require("mongoose")
const { Schema } = mongoose;

const schema = mongoose.Schema({
  name: {
    type: String,
    min: 6,
    required: true
  },
  location: [{
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }],
  date: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model("Users", schema)