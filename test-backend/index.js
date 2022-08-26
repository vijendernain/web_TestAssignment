const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const { userRouter, locationRouter } = require('./src/Roluter');

const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

const dbUrl = "mongodb+srv://test:test@cluster0.yk1zg.mongodb.net/searchByName?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// routes
app.get('/', (req, res) => res.send('Hello World!'))
app.use("/api/user", userRouter)
app.use("/api/locations", locationRouter)
// routes


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})