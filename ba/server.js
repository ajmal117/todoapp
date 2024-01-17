const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
let port = 7000;

const TodoModel = require("./Models/Todo");

const app = express();
app.use(express.json());

app.use(
  cors(
  //   {
  //   origin: ["https://todoapp-9ypc.vercel.app"],
  //   methods: ["POST", "GET", "PUT", "DELETE"],
  //   credentials: true,
  // }
  )
);

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => {
      res.json(err);
    });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});



app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});


app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

mongoose.connect(
  "mongodb+srv://user:user123@cluster0.lkshd4d.mongodb.net/test?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.json("this data send from the backend");
});

app.listen(port, (err) => {
  if (!err) {
    console.log(`backend is respond successfully at the port no. ${port}`);
  } else {
    console.log(`getting error : ${err}`);
  }
});
