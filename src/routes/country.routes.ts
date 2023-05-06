import { Router } from "express";
import CountryController from "../controllers/country.controllers";

const app = Router()

app.get("/", CountryController.Countries)

export default app