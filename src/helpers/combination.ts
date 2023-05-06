import Joi from "joi";

export const combSchema = Joi.object({
    n: Joi.number().integer().min(3).messages({
        'number.base': `"n" should be a type of 'text'`,
        'number.empty': `"n" cannot be an empty field`,
        'number.min': `"n" should have a minimum length of {#limit}`,
        'any.required': `"n" is a required field`
    }).required(),
    r: Joi.number().integer().min(2).messages({
        'number.base': `"r" should be a type of 'text'`,
        'number.empty': `"r" cannot be an empty field`,
        'number.min': `"r" should have a minimum length of {#limit}`,
        'any.required': `"r" is a required field`
    }).required()
})

export function combination(n: number, r: number): number {
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