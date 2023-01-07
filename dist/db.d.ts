import { ChangeReason, EmploymentType, InsurantType } from '.';
import { Gender, PaymentState, PastInsuranceRelation, TermType } from './types';
import { Permissions } from './permissions';
export interface BaseEntity {
    created_at?: Date;
    updated_at?: Date;
}
export interface IFile extends BaseEntity {
    file_id_: number;
    fileName: string;
    originalFileName: string;
    fileEnding: string;
    person?: IPerson;
}
export interface IPerson extends BaseEntity {
    person_id?: number;
    name?: string;
    firstName?: string;
    birthday?: Date;
    birthdayLongDate?: string;
    gender?: Gender;
    postcode?: string;
    city?: string;
    street?: string;
    phone?: string;
    email?: string;
    iban?: string;
    bic?: string;
}
export interface ICustomer extends IPerson {
    parent_entry?: IPerson;
    pension_insurance_number?: string;
    employments?: IEmployment[];
    insurances?: IInsurance[];
    child_entries?: IPerson[];
    terms?: ITerm[];
    applications?: IApplication[];
}
export interface IEmployment extends BaseEntity {
    person?: IPerson;
    employer?: IEmployer;
    start_date?: Date;
    end_date?: Date;
    salary?: number;
}
export interface IInsurance extends BaseEntity {
    insurance_id?: number;
    healthInsurance?: number;
    type?: InsurantType;
    pastInsuranceRelation?: PastInsuranceRelation;
    insurance_number?: string;
    start_date?: Date;
    end_date?: Date;
    person?: IPerson;
    application?: IApplication;
    applicationIsPrevious?: IApplication;
    data?: any;
}
export interface IReferer extends IPerson {
    vat?: string;
    tax_number?: string;
    applications?: IApplication[];
    referal?: string;
    parent?: IReferer;
    children: IReferer[];
    allowedInsurances: number[];
}
export interface IApplication extends BaseEntity {
    application_id?: number;
    person?: IPerson;
    start_date?: Date;
    creation_date?: Date;
    reason?: ChangeReason;
    serialized?: string;
    referer?: IReferer;
    previousInsurance?: IInsurance;
    insurance?: IInsurance;
    payments?: IPayment[];
}
export interface IEmployer extends BaseEntity {
    employer_id?: number;
    name?: string;
    city?: string;
    postcode?: string;
    street?: string;
    phone?: string;
    email?: string;
    employments?: IEmployment[];
    public: boolean;
}
export interface ITerm extends BaseEntity {
    term_id?: number;
    id?: number;
    title?: string;
    created_at?: Date;
    updated_at?: Date;
    data?: string;
    users?: IUser[];
    persons?: IPerson[];
    referers?: IReferer[];
    type?: TermType;
    optional?: boolean;
    active?: boolean;
}
export interface IUser extends BaseEntity {
    user_id?: number;
    name?: string;
    firstName?: string;
    postcode?: string;
    city?: string;
    street?: string;
    phone?: string;
    email?: string;
    iban?: string;
    bic?: string;
    employment_type?: EmploymentType;
    credentials?: ICredentials;
    permissions: Permissions;
}
export interface ICredentials extends BaseEntity {
    user?: IUser;
    hash?: string;
    password?: string;
}
export interface IPayment {
    payment_id?: number;
    state: PaymentState;
    date: Date;
    amount: number;
}
export interface ISetting {
    id?: number;
    key: SettingKey;
    person?: IPerson;
    data: any;
}
export interface PayoutData {
    [year: number]: number;
}
export interface EMailSetting {
    host: string;
    port: number;
    secure: boolean;
    username: string;
    password: string;
}
export declare enum SettingKey {
    Undefined = "Undefined",
    LastExport = "LastExport",
    Payout = "Payout",
    EMail = "EMail"
}
