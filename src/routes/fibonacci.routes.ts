import { Router } from "express";
import FibonacciController from "../controllers/fibonacci.controllers";

const app = Router()

app.post('/', FibonacciController.CreateFibo)

export default app