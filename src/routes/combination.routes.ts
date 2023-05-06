import { Router } from "express";
import CombinationController from "../controllers/combination.controllers";

const app = Router()

app.post('/', CombinationController.CreateCombine)

export default app