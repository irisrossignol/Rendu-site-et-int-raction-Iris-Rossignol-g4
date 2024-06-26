import express from "express";
import { getUser } from "../controllers/UserController.js";
import { authenticateToken } from "../middleware/AuthMiddleware.js";

import { drawCard, getCards } from "../controllers/UserController.js";

const router = express.Router();

router.get("/", authenticateToken,  getUser);
router.post("/draw", authenticateToken, drawCard);
router.get("/getcards", authenticateToken, getCards);

export default router;
