import { EmploymentType } from '.'

export interface Page {
    title: string
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
}

export interface ICredentials {
    person: number;
    hash: string;
    password: string;
}

export interface IAuthResult {
    access_token: string,
    expiration: number
}