import { Router } from "express";
import CompanyRouter from "./company.routes"
import EmployeeRouter from "./employee.routes"
import FiboRouter from "./fibonacci.routes"
import CombineRouter from "./combination.routes"
import CountryRouter from "./country.routes"
const app = Router()

app.use("/companies", CompanyRouter)
app.use("/employees", EmployeeRouter)
app.use("/fibonacci", FiboRouter)
app.use("/combination", CombineRouter)
app.use("/countries", CountryRouter)

export default app