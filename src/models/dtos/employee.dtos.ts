export enum EmployeeJobTitle {
    director = "director",
    manager = "manager",
    staff = "staff"
}

export interface IEmployee {
    name: string
    email: string
    phone_number: string
    job_title: EmployeeJobTitle
    company_id: any
}