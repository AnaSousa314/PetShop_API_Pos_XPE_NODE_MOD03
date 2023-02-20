import express from "express";
import OwnerController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", OwnerController.createOwner);
router.put("/", OwnerController.updateOwner);
router.get("/", OwnerController.getOwners);
router.delete("/:id", OwnerController.deleteOwner);

export default router;