import mongoose, { model, Schema } from "mongoose";
import Joi from "joi";
import { ICompany } from "../dtos/company.dtos";

const CompanySchema = new Schema({
    company_name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    telephone_number: {
        type: String,
        default: null,
        minlength: 8,
        maxlength: 16
    },
    is_active: {
        type: Boolean,
        required: true,
        default: false,
    },
    address: {
        type: String,
        minlength: 10,
        maxlength: 50,
        default: null
    },
})

CompanySchema.methods.joiValidate = function (obj: any) {
    var Joi = require('joi');
    var schema = {
        company_name: Joi.types.String().min(3).max(50).required(),
        telephone_number: Joi.types.String().min(8).max(16),
        address: Joi.types.String().min(10).max(50),
    }
    return Joi.validate(obj, schema);
}

export const Company = model<ICompany>('Company', CompanySchema);


