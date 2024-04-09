const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  addTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
