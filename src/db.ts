import { EmploymentType, Gender } from "./types";

export interface Person {
    person_id: string,
    name: string,
    firstname: string,
    gender: Gender,
    birthday: Date,
    employment_type: EmploymentType
    postcode: string,
    city: string,
    street: string,
    phone: string,
    email: string,
    parent_entry: string,
    iban: string,
    bic: string,
    pension_insurance_number: string,
    health_insurance_number: string,
}
