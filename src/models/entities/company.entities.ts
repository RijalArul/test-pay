import mongoose, { model } from "mongoose";
import Joi from "joi";
const Schema = mongoose.Schema

interface ICompany {
    company_name: string
    telephone_number: string
    is_active: boolean
    address: string
}



const CompanySchema = new Schema<ICompany>({
    company_name: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50
    },
    telephone_number: {
        type: String,
        default: null,
        minLength: 8,
        maxLength: 16
    },
    is_active: {
        type: Boolean,
        required: true,
        default: false,
    },
    address: {
        type: String,
        minLength: 10,
        maxLength: 50,
        default: null
    }
}, { collection: 'companies' })

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



// module.exports = mongoose.model('Company', CompanySchema)

