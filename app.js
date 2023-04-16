const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const url= "mongodb://127.0.0.1:27017/REST_API_TRAINING";
const connectDB = require("./db/connect");
require("dotenv").config();
const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.static('./public'))
//routes

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(url).then(()=>{console.log('Connected')})
    app.listen(PORT, () => {
      console.log(`The task Master application is running on the ${PORT} port`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
