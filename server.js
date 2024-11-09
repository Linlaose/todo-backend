const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(corsOptions));
const db = require("./app/model");

db.sequelize.sync();

const todos = require("./app/routes/todo.routes");

app.use("/todos", todos);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
