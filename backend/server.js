const express = require("express");
const { chats } = require("../backend/DataDummy/data");

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((chat) => {
    chat._id === req.params.id;
  });
  res.send(singleChat);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});
