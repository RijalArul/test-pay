import { Router } from "express";
import CompanyRouter from "./company.routes"
const app = Router()

app.use("/companies", CompanyRouter)

export default app