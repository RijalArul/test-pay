import { Schema, model, Document, PopulatedDoc, Types } from 'mongoose';
import { IEmployee } from './employee.dtos';

export interface ICompany {
    company_name: string
    telephone_number: string
    is_active: boolean
    address: string
    company_employee: any
}

export interface ICompanyRequest {
    company_name: string
    telephone_number: string
    is_active: boolean
    address: string
}

export interface ICompanyResponse {
    id: any,
    company_name: string
    telephone_number: string
    is_active: boolean
    address: string
    employees: any[]
}