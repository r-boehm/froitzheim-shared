import { ChangeReason, EmploymentType, InsurantType } from '.'
import { HealthInsurance, Payment } from './interfaces';
import { Gender, TermType } from './types'

export interface BaseEntity {
    created_at: Date;
    updated_at: Date;
}

export interface IPerson extends BaseEntity {
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
}

export interface ICustomer extends IPerson {
    parent_entry?: IPerson | null;
    pension_insurance_number?: string | null;
    employments?: IEmployment[] | null;
    insurances?: IInsurance[] | null;
    child_entries?: IPerson[] | null;
    terms?: ITerm[] | null;
    applications?: IApplication[] | null;
}

export interface IEmployment extends BaseEntity {
    person: number | null;
    employer: IEmployer | null;
    start_date: Date | null;
    end_date: Date | null;
    salary: number | null;
}

export interface IInsurance extends BaseEntity {
    insurance_id: number | null;
    healthInsurance?: HealthInsurance
    type: InsurantType | null;
    insurance_number?: string | null;
    start_date: Date | null;
    end_date?: Date | null;
    person_id: number | null;
    application?: IApplication | null;
    applicationIsPrevious?: IApplication | null;
    data?: any
}

export interface IReferer extends IPerson {
    vat: string | null;
    tax_number: string | null;
    applications?: IApplication[] | null;
}

export interface IApplication extends BaseEntity {
    application_id: number | null;
    person: IPerson | null;
    start_date: Date | null;
    creation_date: Date | null;
    reason: ChangeReason | null;
    serialized?: string;
    referers?: IReferer[] | null;
    previousInsurance?: IInsurance | null;
    insurance?: IInsurance | null;
    payments: Payment[];
}

export interface IEmployer extends BaseEntity {
    employer_id: number | null;
    name: string | null;
    city: string | null;
    postcode: string | null;
    street: string | null;
    phone: string | null;
    email: string | null;
    employments?: IEmployment[] | null;
}

export interface ITerm extends BaseEntity {
    date: Date | null;
    title: string | null;
    data: string | null;
    users: IUser[];
    customers: ICustomer[];
    type: TermType;
    optional: boolean
}

export interface IUser extends BaseEntity {
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

export interface ICredentials extends BaseEntity {
    user: IUser | null;
    hash: string | null;
    password: string | null;
}