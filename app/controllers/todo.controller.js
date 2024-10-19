// const { randomUUID } = require("crypto");
const db = require("../model");
const Todos = db.todos;

exports.getAll = async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.status(200).json({ data: todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.addTodo = async (req, res) => {
  try {
    const todo = await Todos.create(req.body);
    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
