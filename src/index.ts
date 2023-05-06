import express, { Express, Request, Response } from "express";
import * as dotenv from 'dotenv'
import Joi from 'joi';
import axios from 'axios'
import endpointsConfig from "./endpoints.config";
import { connectDB } from "./db/db";


dotenv.config()

const app: Express = express()
const port = endpointsConfig.Port

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

connectDB()

interface ResponseDTO {
    status: number
    code: string
    data: any
    message: string
}

interface CountryData {
    name: string
    region: string
    timezones: any[]
}

const fiboSchema = Joi.object({
    n: Joi.number().integer().min(2).messages({
        'number.base': `"n" should be a type of 'text'`,
        'number.empty': `"n" cannot be an empty field`,
        'number.min': `"n" should have a minimum length of {#limit}`,
        'any.required': `"n" is a required field`
    })
})

const combSchema = Joi.object({
    n: Joi.number().integer().min(3).messages({
        'number.base': `"n" should be a type of 'text'`,
        'number.empty': `"n" cannot be an empty field`,
        'number.min': `"n" should have a minimum length of {#limit}`,
        'any.required': `"n" is a required field`
    }),
    r: Joi.number().integer().min(2).messages({
        'number.base': `"r" should be a type of 'text'`,
        'number.empty': `"r" cannot be an empty field`,
        'number.min': `"r" should have a minimum length of {#limit}`,
        'any.required': `"r" is a required field`
    })
})

function handleResponse(res: Response, status: number, code: string, data: any, message: string): Response {
    const body: ResponseDTO = {
        status,
        code,
        data,
        message
    }
    return res.status(status).json(body)
}

function combination(n: number, r: number): number {
    let nr: number = n - r
    let nValue: number = 1
    let rValue: number = 1
    let nrValue: number = 1

    for (let i = n; i >= 1; i--) {
        nValue *= i
    }

    for (let j = r; j >= 1; j--) {
        rValue *= j
    }

    for (let k = nr; k >= 1; k--) {
        nrValue *= k
    }

    return nValue / (rValue * nrValue)
}


app.post("/fibonacci", (req: Request, res: Response) => {
    const fibo = [0, 1]
    const { n } = req.body
    const validate = fiboSchema.validate({ n: n })
    let status: number = 0
    if (validate.error) {
        status = 400
        handleResponse(res, status, status.toString(), null, validate.error.details[0].message)
    }

    for (let i = fibo.length; i < n; i++) {
        fibo[i] = (fibo[i - 2] + fibo[i - 1])
    }
    status = 200
    handleResponse(res, status, status.toString(), fibo.toString(), "Success Fibonacci")
})

app.post("/combination", (req: Request, res: Response) => {
    const { n, r } = req.body
    const validate = combSchema.validate({ n, r })
    let status: number = 0

    if (validate.error) {
        status = 400
        handleResponse(res, status, status.toString(), null, validate.error.details[0].message)
    }

    status = 200
    handleResponse(res, status, status.toString(), combination(n, r), "Success Combination")
})

app.get("/countries", async (req: Request, res: Response) => {
    let status: number = 200
    try {
        const resp = await axios({
            method: "GET",
            url: "https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json",
        })

        const { data } = resp

        let bodyCountry: CountryData[] = []
        for (let i = 0; i < data.length; i++) {
            let newCountry: CountryData = {
                name: data[i].name,
                region: data[i].region,
                timezones: data[i].timezones
            }

            bodyCountry.push(newCountry)
        }

        status = 200

        handleResponse(res, status, status.toString(), bodyCountry, "Success Countries")
    } catch (err) {
        status = 500
        handleResponse(res, status, status.toString(), null, "Internal Server Error")
    }

})


app.listen(port, () => {
    console.log("App Is listening on port ", port)
})