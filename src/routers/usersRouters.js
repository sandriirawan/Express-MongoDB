const express = require("express");
const {
  getUsers,
  createUsers,
  deleteUsers,
  getByIdUser,
  updateUsers,
} = require("../controllers/userController");
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getByIdUser);
router.post("/", createUsers);
router.put("/:id", updateUsers);
router.delete("/:id", deleteUsers);

module.exports = router;
