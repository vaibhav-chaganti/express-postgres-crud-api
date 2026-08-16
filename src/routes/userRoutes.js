import express from "express";
import validateUser from "../middlewares/inputValidator.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;