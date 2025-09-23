import { ChangeReason, EmploymentType, InsuranceData, InsurantType } from '.';
import { Gender, PastInsuranceRelation, TermType, Company, FamilyStatus, FileType } from './types';
import { Permissions } from './permissions';
export interface BaseEntity {
    created_at?: Date;
    updated_at?: Date;
}
export type FormType = "Textbox" | "CheckBox";
export interface IForm extends BaseEntity {
    form_id?: number;
    formName: string;
    filePath: string;
    fields: {
        bounds: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
            left?: number;
            top?: number;
            right?: number;
            bottom?: number;
            location?: {
                x?: number;
                y?: number;
            };
            size?: {
                width: number;
                height: number;
            };
        };
        name: string;
        id: string;
        type: FormType;
        property: string;
    }[];
    bindings: Record<string, string>;
}
export interface IFile extends BaseEntity {
    file_id_: number;
    fileName: string;
    originalFileName: string;
    fileEnding: string;
    person?: IPerson;
    fileType?: FileType;
}
export interface IPerson extends BaseEntity {
    person_id?: number;
    name?: string;
    firstName?: string;
    birthday?: Date;
    birthdayLongDate?: string;
    gender?: Gender;
    familyStatus?: FamilyStatus;
    postcode?: string;
    city?: string;
    street?: string;
    streetNumber?: string;
    phone?: string;
    email?: string;
    iban?: string;
    bic?: string;
    bankAccountHolder?: string;
    family?: IFamily;
}
export interface IFamily {
    id: number;
    members: IPerson[];
    owner: IPerson;
}
export interface ICustomer extends IPerson {
    parent_entry?: IPerson;
    pension_insurance_number?: string;
    employments?: IEmployment[];
    insurances?: IInsurance[];
    child_entries?: IPerson[];
    terms?: ITerm[];
    applications?: IApplication[];
    birthCountry?: string;
    birthCity?: string;
    birthName?: string;
    nationality?: string;
}
export interface IEmployment extends BaseEntity {
    person?: IPerson;
    employer?: IEmployer;
    application?: IApplication;
    start_date?: Date;
    end_date?: Date;
    salary?: number;
    comment?: string;
}
export interface IInsurance extends BaseEntity {
    insurance_id?: number;
    healthInsurance?: string;
    type?: InsurantType;
    pastInsuranceRelation?: PastInsuranceRelation;
    insurance_number?: string;
    start_date?: Date;
    end_date?: Date;
    person?: IPerson;
    application?: IApplication;
    applicationIsPrevious?: IApplication;
    data?: InsuranceData;
}
export interface IApplication extends BaseEntity {
    application_id?: number;
    person?: IPerson;
    start_date?: Date;
    creation_date?: Date;
    reason?: ChangeReason;
    serialized?: string;
    referer?: IUser;
    previousInsurance?: IInsurance;
    insurance?: IInsurance;
    employment?: IEmployment;
    payments?: IPayment[];
    remark?: string;
}
export interface IEmployer extends BaseEntity {
    employer_id?: number;
    name?: string;
    city?: string;
    postcode?: string;
    street?: string;
    streetNumber?: string;
    phone?: string;
    email?: string;
    employments?: IEmployment[];
    public: boolean;
    remark?: string;
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
    referers?: IUser[];
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
    streetNumber?: string;
    phone?: string;
    email?: string;
    iban?: string;
    bic?: string;
    bankAccountHolder?: string;
    employment_type?: EmploymentType;
    credentials?: ICredentials;
    roles: IRole[];
    vat?: string;
    tax_number?: string;
    applications?: IApplication[];
    referal?: string;
    parent?: IUser;
    children: IUser[];
    allowedInsurances?: string[];
    hasProvision: boolean;
    provision: number;
    _total_provision?: number;
    /**
     * Vermittlerkennung
     */
    broker_identifier: Record<Company, string>;
}
export interface IRole extends BaseEntity {
    role_id: number;
    title: string;
    default?: boolean;
    inherit?: boolean;
    permissions: Permissions;
}
export interface ICredentials extends BaseEntity {
    user?: IUser;
    hash?: string;
    password?: string;
}
export interface IPayment {
    payment_id?: number;
    date: Date;
    amount: number;
    storno?: IPayment;
}
export interface ITransaction {
    id: number;
    date: Date;
    amount: number;
    user: IUser;
    payment: IPayment;
    isPayout: boolean;
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
export interface WebDAVSetting {
    url: string;
    port: number;
    username: string;
    password: string;
}
export declare enum SettingKey {
    Undefined = "Undefined",
    LastExport = "LastExport",
    Payout = "Payout",
    EMail = "EMail",
    Broker = "Broker",
    Insurances = "Insurances",
    WebDAV = "WebDAV",
    TextTemplate = "TextTemplate",
    BigEmail = "BigEmail",
    BergischeEmail = "BergischeEmail"
}
