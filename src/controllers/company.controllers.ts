import { handleResponse } from "../helpers/response.api";
import { ICompanyRequest } from "../models/dtos/company.dtos";
import { Company } from "../models/entities/company.entities";
import { Request, Response } from "express";
import { Employee } from "../models/entities/employee.entities";

class CompanyController {
    static CreateCompany(req: Request, res: Response) {
        const { company_name, telephone_number, is_active, address } = req.body

        const newCompany = new Company({
            company_name: company_name,
            telephone_number: telephone_number,
            is_active: is_active,
            address: address
        })

        newCompany.save().then((company) => {
            const status = 201
            handleResponse(res, status, status.toString(), company, "Success")
        }).catch((err) => {
            res.status(400).json({
                err: err.message
            })
        })
    }

    static AddEmployee(req: Request, res: Response) {
        const { company_id } = req.params
        const { name, email, phone_number, job_title } = req.body

        const newEmployee = new Employee({
            name: name,
            email: email,
            phone_number: phone_number,
            job_title: job_title
        })

        newEmployee.company_id = company_id

        newEmployee.save().then((employee) => {
            const status = 201
            handleResponse(res, status, status.toString(), employee, "Success")
        }).catch((err) => {
            res.status(400).json({
                "err": err.message
            })
        })

    }
}


export default CompanyController