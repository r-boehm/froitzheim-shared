import { ChildRelation, DependantInsuranceType, EducationType } from './types';
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
    username: string;
    firstname: string;
    name: string;
    userId: number;
    permissions: Permissions;
}
export interface InsuranceData {
    familyInsuredName: string;
    familyInsuredNumber: string;
    notInsuredSince: Date;
    notInsuredReason: string;
}
/** Zusätzliche Angaben zu einem Angehörigen für die Familienversicherung (Datumswerte als ISO-String) */
export interface DependantDetails {
    childRelation?: ChildRelation;
    /** Der andere Elternteil des Kindes ist der Ehe-/Lebenspartner des Mitglieds */
    otherParentIsPartner?: boolean;
    insuranceType?: DependantInsuranceType;
    insurerName?: string;
    insuranceEnd?: Date | string;
    /** Hauptversicherte Person, falls zuletzt eine Familienversicherung bestand */
    mainInsured?: {
        name?: string;
        firstName?: string;
        birthday?: Date | string;
    };
    education?: {
        type?: EducationType;
        until?: Date | string;
        institution?: string;
    };
}
export interface TextTemplate {
    title: string;
    content: string;
}
