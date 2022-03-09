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

export enum Salary {
    Undefined = 0,
    Minijob = 1,
    Default = 2,
    OverThreshold
}

export enum EmploymentType {
    Unemployed = 0,
    Employed = 1,
    External = 2,
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

export enum ChangeReason {
    Undefined = 0,
    ChangeInsuranceRelationship = 1,
    ExpirationCommitmentPeriod = 2,
}

export type Email = string;