import express from "express";
import cors from "cors";
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.json());
app.use(cors(corsOptions));
import db from "./app/model/index.js";

db.sequelize.sync();

import todos from "./app/routes/todo.routes.js";

app.use("/api/v1/todos", todos);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
