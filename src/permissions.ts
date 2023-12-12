export interface Permissions {
    Administration: Administration
}

export interface Administration extends Entry {
    settings: boolean;
    terms: boolean;
    employers: Employers;
    Customers: Customers;
    Applications: Applications;
    Employees: Employees;
    Export: Export;
}

export interface Customers extends CRUD {
    all: boolean;
}

export interface Applications extends Entry {
    all: boolean;
    update: boolean;
    payment: boolean;
}

export interface Employees extends CRUD {
    manage: boolean;
}
export interface Employers {
    create: boolean;
    manage: boolean;
}

export interface Export extends Entry {
    all: boolean;
}

export interface Entry {
    read: boolean
}

export interface CRUD extends Entry {
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
}