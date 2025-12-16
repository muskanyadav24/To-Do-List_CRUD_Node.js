const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");

const server = express();

server.set("view engine", "ejs");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static("assets"));

server.use("/", todoRoutes);

server.listen(3000, (err) => {
    if(!err){
      console.log("Server is running on http://localhost:3000");
      console.log("Server is started successfully....");
    }else{
      console.log("Error occurred: ", err);
    }
});
