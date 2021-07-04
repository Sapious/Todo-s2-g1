const router = require("express").Router();
const todoControllers = require("../controllers/todo.controllers");

router.get("/", todoControllers.getTodos);
router.get("/:todoId", todoControllers.getTodo);
router.delete("/:todoId", todoControllers.deleteTodo);
router.put("/:todoId", todoControllers.updateTodo);
router.post("/", todoControllers.createTodo);

module.exports = router;
