const express = require("express");
// const { chats } = require("../backend/DataDummy/data");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const connectDB = require("./Config/db");
// const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./Middlewares/errorMiddleware");
dotenv.config();
const app = express();
app.use(cors());
const PORT = 4000;
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully...");
});

app.use("/api/user", userRoutes);


app.use(notFound);
app.use(errorHandler);

app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`);
});
