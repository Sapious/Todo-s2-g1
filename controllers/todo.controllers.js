const Todo = require("../models/todo.models");

const createTodo = async (req, res) => {
  console.log(req);
  const newTodo = new Todo({
    name: req.body.name,
  });
  try {
    const savedTodo = await newTodo.save();
    return res.status(200).json({ todo: savedTodo });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({ todos: todos });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const getTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const todo = await Todo.findById(id);
    return res.status(200).json({ todo: todo });
  } catch (err) {
    return res.status(500).json(err);
  }
};
const deleteTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    return res.status(200).json({ todo: deletedTodo });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateTodo = async (req, res) => {
  const id = req.params.todoId;
  try {
    const data = { ...req.body };
    const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });
    return res.status(200).json({ todo: updatedTodo });
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports.createTodo = createTodo;
module.exports.getTodos = getTodos;
module.exports.getTodo = getTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.updateTodo = updateTodo;
