import { ChangeReason, EmploymentType, InsurantType } from '.'
import { Gender } from './types'

export interface IPerson {
    person_id: number;
    name: string;
    firstName: string;
    birthday: Date;
    gender: Gender;
    postcode: string;
    city: string;
    street: string;
    phone: string;
    email: string;
    parent_entry: IPerson;
    iban: string;
    bic: string;
    pension_insurance_number: string;
    employments: IEmployment[];
    insurances: IInsurance[];
    child_entries: IPerson[];
    terms: ITerms[];
}

export interface IEmployment {
    person: number;
    employer: number;
    start_date: Date;
    end_date: Date;
    salary: number;
}

export interface IInsurance {
    insurance_id: number;
    name: string;
    type: InsurantType;
    insurance_number: string;
    start_date: Date;
    end_date: Date;
    person: IPerson;
}

export interface IReferer {
    person: number;
    vat: string;
    tax_number: string;
    Applications: IApplication[];
}

export interface IApplication {
    application_id: number;
    person: number;
    insurance: number;
    start_date: Date;
    creation_date: Date;
    reason: ChangeReason;
    serialized: string;
    referers: IReferer[];
}


export interface IEmployer {
    employer_id: number;
    name: string;
    city: string;
    postcode: string;
    street: string;
    phone: string;
    email: string;
    employments: IEmployment[];
}

export interface ITerms {
    person: number;
    date: Date;
    data: string;
}

export interface IUser {
    user_id: number;
    name: string;
    firstName: string;
    postcode: string;
    city: string;
    street: string;
    phone: string;
    email: string;
    iban: string;
    bic: string;
    employment_type: EmploymentType;
    credentials: ICredentials;
    terms: ITerms[];
}

export interface ICredentials {
    person: number;
    hash: string;
    password: string;
}