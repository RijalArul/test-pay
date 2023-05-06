import { Router } from "express";
import CompanyController from "../controllers/company.controllers";

const app = Router()

app.post("/", CompanyController.CreateCompany)
app.post("/:company_id/employees", CompanyController.AddEmployee)

export default app