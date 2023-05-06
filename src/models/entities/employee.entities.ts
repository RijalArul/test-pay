import { ObjectId, Schema, model } from "mongoose";
import { EmployeeJobTitle, IEmployee } from "../dtos/employee.dtos";

const EmployeeSchema = new Schema<IEmployee>({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    phone_number: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16
    },
    job_title: {
        type: String,
        required: true,
        enum: EmployeeJobTitle,
        default: EmployeeJobTitle.staff,
    },
    company_id: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    }
}, { collection: "employees" })

EmployeeSchema.methods.joiValidate = function (obj: any) {
    var Joi = require('joi');
    var schema = {
        name: Joi.types.String().min(2).max(50).required(),
        email: Joi.types.String().min(5).max(255).required(),
        phone_number: Joi.types.String().min(8).max(16),
        job_title: Joi.string().valid('director', 'manager', 'staff'),
        company_id: Joi.types.String().required()
    }
    return Joi.validate(obj, schema);
}

export const Employee = model<IEmployee>('Employee', EmployeeSchema);

