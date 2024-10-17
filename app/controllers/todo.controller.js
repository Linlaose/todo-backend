const db = require("../model");
const Todos = db.todos;

exports.getAll = async (req, res) => {
  try {
    const todos = await Todos.findAll();
    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ error });
  }
};
