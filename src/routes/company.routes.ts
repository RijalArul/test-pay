import { Router } from "express";
import CompanyController from "../controllers/company.controllers";

const app = Router()

app.post("/", CompanyController.CreateCompany)
app.post("/:company_id/employees", CompanyController.AddEmployee)
app.get("/", CompanyController.GetCompanies)
app.get("/:id/employees", CompanyController.EmployeesByCompanyID)
app.put("/:id/set_active", CompanyController.UpdateIsActive)
app.put("/:company_id/employees/:employee_id", CompanyController.UpdateEmployee)

export default app