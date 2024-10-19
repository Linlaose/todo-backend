const express = require("express");
const app = express();

app.use(express.json());

const db = require("./app/model");

db.sequelize.sync();

require("./app/routes/todo.routes")(app);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
