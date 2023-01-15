import { Permissions } from '.';
export interface Page {
    title: string;
}
export interface IAuthResult {
    access_token: string;
    expiration: number;
}
export interface HealthInsurance {
    id: number;
    name: string;
}
export interface Payload {
    username: string;
    userId: number;
    permissions: Permissions;
}
export interface InsuranceData {
    familyInsuredName: string;
    familyInsuredNumber: string;
    notInsuredSince: Date;
    notInsuredReason: string;
}
