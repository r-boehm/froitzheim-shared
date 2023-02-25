"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyEntries = exports.TermType = exports.PaymentState = exports.ChangeReason = exports.InsurantType = exports.PastInsuranceRelation = exports.EmploymentType = exports.Salary = exports.FamilyStatus = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 0] = "Other";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var FamilyStatus;
(function (FamilyStatus) {
    FamilyStatus[FamilyStatus["Unmarried"] = 0] = "Unmarried";
    FamilyStatus[FamilyStatus["Married"] = 1] = "Married";
    FamilyStatus[FamilyStatus["Divorced"] = 2] = "Divorced";
    FamilyStatus[FamilyStatus["Widowed"] = 3] = "Widowed";
})(FamilyStatus = exports.FamilyStatus || (exports.FamilyStatus = {}));
var Salary;
(function (Salary) {
    Salary[Salary["Undefined"] = 0] = "Undefined";
    Salary[Salary["Minijob"] = 1] = "Minijob";
    Salary[Salary["Default"] = 2] = "Default";
    Salary[Salary["OverThreshold"] = 3] = "OverThreshold";
})(Salary = exports.Salary || (exports.Salary = {}));
var EmploymentType;
(function (EmploymentType) {
    EmploymentType[EmploymentType["Unemployed"] = 0] = "Unemployed";
    EmploymentType[EmploymentType["Employed"] = 1] = "Employed";
    EmploymentType[EmploymentType["External"] = 2] = "External";
})(EmploymentType = exports.EmploymentType || (exports.EmploymentType = {}));
var PastInsuranceRelation;
(function (PastInsuranceRelation) {
    PastInsuranceRelation[PastInsuranceRelation["NotInsured"] = 0] = "NotInsured";
    PastInsuranceRelation[PastInsuranceRelation["Insured"] = 1] = "Insured";
    PastInsuranceRelation[PastInsuranceRelation["FamilyInsured"] = 2] = "FamilyInsured";
})(PastInsuranceRelation = exports.PastInsuranceRelation || (exports.PastInsuranceRelation = {}));
var InsurantType;
(function (InsurantType) {
    InsurantType[InsurantType["Undefined"] = 0] = "Undefined";
    InsurantType[InsurantType["MandatoryInsuredEmployee"] = 1] = "MandatoryInsuredEmployee";
    InsurantType[InsurantType["VoluntaryInsuredEmployee"] = 2] = "VoluntaryInsuredEmployee";
    InsurantType[InsurantType["SelfEmployed"] = 3] = "SelfEmployed";
    InsurantType[InsurantType["Artist"] = 4] = "Artist";
    InsurantType[InsurantType["SeasonalWorker"] = 5] = "SeasonalWorker";
    InsurantType[InsurantType["Pensioner"] = 6] = "Pensioner";
    InsurantType[InsurantType["Journeyman"] = 7] = "Journeyman";
    InsurantType[InsurantType["Pupil"] = 8] = "Pupil";
    InsurantType[InsurantType["Student"] = 9] = "Student";
    InsurantType[InsurantType["UnemployedJobCenter"] = 10] = "UnemployedJobCenter";
    InsurantType[InsurantType["Unemployed"] = 11] = "Unemployed";
})(InsurantType = exports.InsurantType || (exports.InsurantType = {}));
var ChangeReason;
(function (ChangeReason) {
    ChangeReason[ChangeReason["Undefined"] = 0] = "Undefined";
    ChangeReason[ChangeReason["ChangeInsuranceRelationship"] = 1] = "ChangeInsuranceRelationship";
    ChangeReason[ChangeReason["ExpirationCommitmentPeriod"] = 2] = "ExpirationCommitmentPeriod";
})(ChangeReason = exports.ChangeReason || (exports.ChangeReason = {}));
var PaymentState;
(function (PaymentState) {
    PaymentState[PaymentState["Open"] = 0] = "Open";
    PaymentState[PaymentState["PaidIn"] = 1] = "PaidIn";
    PaymentState[PaymentState["PaidOut"] = 2] = "PaidOut";
    PaymentState[PaymentState["Refunded"] = 3] = "Refunded";
})(PaymentState = exports.PaymentState || (exports.PaymentState = {}));
var TermType;
(function (TermType) {
    TermType[TermType["All"] = 0] = "All";
    TermType[TermType["User"] = 1] = "User";
    TermType[TermType["Customer"] = 2] = "Customer";
    TermType[TermType["Referer"] = 3] = "Referer";
})(TermType = exports.TermType || (exports.TermType = {}));
exports.CompanyEntries = ['Novitas', 'something'];
