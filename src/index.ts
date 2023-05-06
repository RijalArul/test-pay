import express, { Express, Request, Response } from "express";
import * as dotenv from 'dotenv'
import Joi from 'joi';


dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

interface ResponseDTO {
    status: number
    code: string
    data: any
    message: string
}

const fiboSchema = Joi.object({
    n: Joi.number().integer().min(2)
})

const combSchema = Joi.object({
    n: Joi.number().integer().min(3),
    r: Joi.number().integer().min(2)
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
    handleResponse(res, status, status.toString(), fibo, "Success Fibonacci")
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



app.listen(port, () => {
    console.log("App Is listening on port ", port)
})