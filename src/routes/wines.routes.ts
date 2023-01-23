import { Router } from "express";
import {create, findAll, findById, update, remove} from "../controllers/wines.controller.js";

const router = Router();

router.post("/wines", create);
router.get("/wines", findAll);
router.get("/wines/:id", findById);
router.patch("/wines/:id", update);
router.delete("/wines/:id", remove);

export default router;