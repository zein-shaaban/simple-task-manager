const express = require("express");
const router = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound=require('./middleware/404');
const errorHandler=require('./middleware/error-handler')
require("dotenv").config();

const port = process.env.PORT;

const app = express();
app.use(express.static("./public"));
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server Works On Port ${port}`));
  } catch (error) {
    console.log("Error : ", error);
  }
};
start();
app.use(express.json());

app.use("/api/v1/tasks", router);

app.use(notFound);
app.use(errorHandler)