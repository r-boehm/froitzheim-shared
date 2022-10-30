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
    id: number;
    name: string;
}
export interface Payload {
    username: string
    userId: number,
    permissions: Permissions
};
