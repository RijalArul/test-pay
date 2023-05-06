import { Router } from "express";
import EmployeeController from "../controllers/employee.controllers";

const app = Router()

app.get('/:id', EmployeeController.EmployeeByID)
app.delete('/:id', EmployeeController.DeleteEmployee)

export default app

// app.get('/:id')