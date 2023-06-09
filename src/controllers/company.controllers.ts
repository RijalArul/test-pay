import { handleResponse } from "../helpers/response.api";
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
            const status = 400
            handleResponse(res, status, status.toString(), null, err.message)
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
            const status = 400
            handleResponse(res, status, status.toString(), null, err.message)
        })

    }

    static GetCompanies(req: Request, res: Response) {
        Company.find().then((company) => {
            const status = 200
            handleResponse(res, status, status.toString(), company, "Success")
        }).catch((err) => {
            const status = 500
            handleResponse(res, status, status.toString(), null, "Internal Server Error")
        })

    }

    static UpdateIsActive(req: Request, res: Response) {
        const { id } = req.params
        const filter = { "_id": id }
        const update = { "is_active": true }
        Company.findOneAndUpdate(filter, update).then(() => {
            const status = 200
            Company.findOne(filter).then((company) => {
                handleResponse(res, status, status.toString(), company, "Success")
            })
        }).catch((err) => {
            const status = 400
            handleResponse(res, status, status.toString(), null, err.message)
        })
    }

    static EmployeesByCompanyID(req: Request, res: Response) {
        const { id } = req.params
        Company.aggregate([
            {
                $match: { $expr: { $eq: ['$_id', { $toObjectId: id }] } }
            },
            {
                $lookup:
                {
                    from: "employees",
                    localField: "_id",
                    foreignField: "company_id",
                    as: "employees"
                }
            },
        ]).then((company) => {
            const status = 200
            handleResponse(res, status, status.toString(), company, "succeess")
        }).catch((err) => {
            const status = 500
            handleResponse(res, status, status.toString(), null, "Internal Server Error")
        })

    }

    static UpdateEmployee(req: Request, res: Response) {
        const { company_id, employee_id } = req.params
        const { name, phone_number, job_title, email } = req.body
        const filter = { "_id": employee_id, "company_id": company_id }
        const update = {
            name: name,
            phone_number: phone_number,
            job_title: job_title,
            email: email
        }

        Employee.findByIdAndUpdate(filter, update, { runValidators: true }).then(() => {
            Employee.findById(filter).then((employee) => {
                const status = 200
                handleResponse(res, status, status.toString(), employee, "Success")
            })
        }).catch((err) => {
            const status = 400
            handleResponse(res, status, status.toString(), null, err.message)
        })
    }

}


export default CompanyController