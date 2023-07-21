const express = require("express");
const app = express();
const mongoose = require('mongoose');
const userModel = require('./models/Users');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://AL:75b1c754ae@cluster0.hwbxnzf.mongodb.net/MERN-Tutorial?retryWrites=true&w=majority');

//gets a list of all users
app.get('/getUsers', (req, res) => {
  userModel.find()
    .then((result) => {
      res.json(result)
    })
    .catch(err => {
      res.json(err)
    })
});

//
app.post("/createUser", async (req, res) => {
  const user = req.body //the data we want to insert in our database that the user enters in the frontend
  const newUser = new userModel(user);
  await newUser.save();

  res.json(user);
});

app.listen(3001, () => {
  console.log("Server is running");
});
