import { Response } from "express"
import { ResponseDTO } from "../models/dtos/global.dtos"
export function handleResponse(res: Response, status: number, code: string, data: any, message: string): Response {
    const body: ResponseDTO = {
        status,
        code,
        data,
        message
    }
    return res.status(status).json(body)
}