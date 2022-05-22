import { ChangeReason, EmploymentType, InsurantType } from '.';
import { HealthInsurance } from './interfaces';
import { Gender } from './types';
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
    terms?: ITerms[] | null;
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
    name: string | null;
    type: InsurantType | null;
    insurance_number: string | null;
    start_date: Date | null;
    end_date?: Date | null;
    person_id: number | null;
    application?: IApplication | null;
    data?: any;
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
    insurance?: IInsurance | null;
    insurantType?: InsurantType | null;
    healthInsurance?: HealthInsurance;
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
export interface ITerms extends BaseEntity {
    person_id: number | null;
    date: Date | null;
    data: string | null;
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
    person: number | null;
    hash: string | null;
    password: string | null;
}
