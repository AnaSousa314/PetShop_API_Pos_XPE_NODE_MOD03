import express from "express";

import AnimalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", AnimalController.createAnimal);

export default router;