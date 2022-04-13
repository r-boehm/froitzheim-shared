import { ChangeReason, EmploymentType, InsurantType } from '.'
import { Gender } from './types'

export interface IPerson {
    person_id: number | null;
    name: string | null;
    firstName: string | null;
    birthday: Date | null;
    birthdayLongDate?: string | null;
    gender: Gender | null;
    postcode: string | null;
    city: string | null;
    street: string | null;
    phone: string | null;
    email: string | null;
    iban: string | null;
    bic: string | null;
    parent_entry?: IPerson | null;
    pension_insurance_number?: string | null;
    employments?: IEmployment[] | null;
    insurances?: IInsurance[] | null;
    child_entries?: IPerson[] | null;
    terms?: ITerms[] | null;
}

export interface IEmployment {
    person: number | null;
    employer: number | null;
    start_date: Date | null;
    end_date: Date | null;
    salary: number | null;
}

export interface IInsurance {
    insurance_id: number | null;
    name: string | null;
    type: InsurantType | null;
    insurance_number: string | null;
    start_date: Date | null;
    end_date: Date | null;
    person: IPerson | null;
}

export interface IReferer {
    person: number | null;
    vat: string | null;
    tax_number: string | null;
    Applications?: IApplication[] | null;
}

export interface IApplication {
    application_id: number | null;
    person_id: number | null;
    insurance: number | null;
    start_date: Date | null;
    creation_date: Date | null;
    reason: ChangeReason | null;
    serialized: string | null;
    referers: IReferer[] | null;
}


export interface IEmployer {
    employer_id: number | null;
    name: string | null;
    city: string | null;
    postcode: string | null;
    street: string | null;
    phone: string | null;
    email: string | null;
    employments: IEmployment[] | null;
}

export interface ITerms {
    person_id: number | null;
    date: Date | null;
    data: string | null;
}

export interface IUser {
    user_id: number | null;
    name: string | null;
    firstName: string | null;
    postcode: string | null;
    city: string | null;
    street: string | null;
    phone: string | null;
    email: string | null;
    iban: string | null;
    bic: string | null;
    employment_type: EmploymentType | null;
    credentials: ICredentials | null;
}

export interface ICredentials {
    person: number | null;
    hash: string | null;
    password: string | null;
}