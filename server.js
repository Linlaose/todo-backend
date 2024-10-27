const express = require("express");
const app = express();

app.use(express.json());

const db = require("./app/model");

db.sequelize.sync();

const todos = require("./app/routes/todo.routes");

app.use("/todos", todos);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
