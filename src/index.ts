import express, { Express, Request, Response } from "express";
import * as dotenv from 'dotenv'
import Joi from 'joi';
import axios from 'axios'
import { connectDB } from "./db/db";
import { Company } from "./models/entities/company.entities";
import { Employee } from "./models/entities/employee.entities"
import { handleResponse } from "./helpers/response.api";
import indexRoutes from "./routes/index.routes"


dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

connectDB()



app.use("/api", indexRoutes)



app.listen(port, () => {
    console.log("App Is listening on port ", port)
})