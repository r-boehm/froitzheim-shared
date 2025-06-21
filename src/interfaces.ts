import { EmploymentType } from '.'
import { PaymentState } from './types'
import { Permissions } from '.';

export interface Page {
    title: string;
}
export interface IAuthResult {
    access_token: string;
    expiration: number;
}
export interface HealthInsurance {
    id: string;
    value: number;
    name: string;
}
export interface Payload {
    username: string
    firstname: string;
    name: string;
    userId: number,
    permissions: Permissions
};

export interface InsuranceData {
    familyInsuredName: string;
    familyInsuredNumber: string;
    notInsuredSince: Date;
    notInsuredReason: string;
}