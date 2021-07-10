const router = require("express").Router();
const todoControllers = require("../controllers/todo.controllers");
const verifyToken = require("../middlewares/verifyToken");
router.get("/", todoControllers.getTodos);
router.get("/:todoId", todoControllers.getTodo);
router.delete("/:todoId", verifyToken, todoControllers.deleteTodo);
router.put("/:todoId", verifyToken, todoControllers.updateTodo);
router.post("/", verifyToken, todoControllers.createTodo);

module.exports = router;
