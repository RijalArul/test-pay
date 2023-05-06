import { Request, Response } from "express";
import Fibonacci from "../helpers/fibo";
import { handleResponse } from "../helpers/response.api";

class FibonacciController {
    static CreateFibo(req: Request, res: Response) {
        const { n } = req.body
        const fibo = Fibonacci(res, n)
        const status = 200
        handleResponse(res, status, status.toString(), fibo, "Success Fibonacci")
    }
}

export default FibonacciController