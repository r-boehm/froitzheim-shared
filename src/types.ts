import { Permissions } from "./permissions";

export type JWT_Payload = {
    user: {
        ID: number,
        firstname: string,
        name: string,
        email: string,
    },
    permissions: Permissions
}

export enum Gender {
    Other = 0,
    Male = 1,
    Female = 2,
}

export enum FamilyStatus {
    Unmarried = 0,
    Married = 1,
    Divorced = 2,
    Widowed = 3
}

export enum FamilyMemberRelation {
    Partner = 'partner',
    Child = 'child',
    Other = 'other'
}

/** Anlass für die Aufnahme in die Familienversicherung */
export enum FamilyInsuranceReason {
    MembershipStart = 'membershipStart',
    ChildBirth = 'childBirth',
    Marriage = 'marriage',
    EndOfOwnMembership = 'endOfOwnMembership',
    Other = 'other'
}

/** Verwandtschaftsverhältnis des Kindes zum Mitglied ("leibliches Kind" auch bei Adoption) */
export enum ChildRelation {
    Biological = 'biological',
    Step = 'step',
    Foster = 'foster',
    Grandchild = 'grandchild'
}

/** Bisherige (bzw. beim nicht mitversicherten Partner aktuelle) Versicherung eines Angehörigen */
export enum DependantInsuranceType {
    Own = 'own',
    Family = 'family',
    NotStatutory = 'notStatutory',
    None = 'none'
}

export enum EducationType {
    School = 'school',
    Study = 'study'
}

export enum Salary {
    Undefined = 0,
    Minijob = 1,
    Default = 2,
    OverThreshold = 3
}

export enum EmploymentType {
    Unemployed = 0,
    Employed = 1,
    External = 2,
}

export enum PastInsuranceRelation {
    NotInsured = 0,
    Insured = 1,
    FamilyInsured = 2
}

export enum InsurantType {
    Undefined = 0,
    MandatoryInsuredEmployee = 1,
    VoluntaryInsuredEmployee = 2,
    SelfEmployed = 3,
    Artist = 4,
    SeasonalWorker = 5,
    Pensioner = 6,
    Journeyman = 7,
    Pupil = 8,
    Student = 9,
    UnemployedJobCenter = 10,
    Unemployed = 11
}

export enum FileType {
    Undefined = 0,
    Personal_ID = 1,
    HealthInsurance = 2,
    Certificate = 3,
}

export enum ChangeReason {
    Undefined = 0,
    ChangeInsuranceRelationship = 1,
    ExpirationCommitmentPeriod = 2,
}

export enum PaymentState {
    Open = 0,
    PaidIn = 1,
    PaidOut = 2,
    Refunded = 3,
}

export enum TermType {
    All = 0,
    User = 1,
    Customer = 2,
    Referer = 3
}

export type Email = string;

export const CompanyEntries = ['Novitas', 'DAK', 'Viactiv', 'KKH'] as const;
type CompanyType = typeof CompanyEntries;
export type Company = CompanyType[number]