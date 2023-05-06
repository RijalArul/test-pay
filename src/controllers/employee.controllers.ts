import { Request, Response } from "express";
import { Employee } from "../models/entities/employee.entities";
import { handleResponse } from "../helpers/response.api";
class EmployeeController {
    static EmployeeByID(req: Request, res: Response) {
        const { id } = req.params
        Employee.findById(id)
            .then((employee) => {
                const status = 200
                handleResponse(res, status, status.toString(), employee, "Success")
            }).catch((err) => {
                const status = 404
                handleResponse(res, status, status.toString(), null, "Not Found")
            })
    }

    static DeleteEmployee(req: Request, res: Response) {
        const { id } = req.params
        const filter = { "_id": id }
        Employee.findOneAndDelete(filter).then(() => {
            const status = 200
            handleResponse(res, status, status.toString(), null, "Success")
        }).catch((err) => {
            const status = 500
            handleResponse(res, status, status.toString(), null, "Internal Server Error")
        })
    }
}

export default EmployeeController