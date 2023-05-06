import Joi, { string } from "joi"
import { handleResponse } from "./response.api"
import { Response } from "express"

const fiboSchema = Joi.object({
    n: Joi.number().integer().min(2).messages({
        'number.base': `"n" should be a type of 'text'`,
        'number.empty': `"n" cannot be an empty field`,
        'number.min': `"n" should have a minimum length of {#limit}`,
        'any.required': `"n" is a required field`
    }).required()
})

export default function Fibonacci(res: Response, n: number): string {
    const fibo = [0, 1]
    const validate = fiboSchema.validate({ n: n })
    let status: number = 0
    if (validate.error) {
        status = 400
        handleResponse(res, status, status.toString(), null, validate.error.details[0].message)
    }
    for (let i = fibo.length; i < n; i++) {
        fibo[i] = (fibo[i - 2] + fibo[i - 1])
    }

    return fibo.toString()
}
