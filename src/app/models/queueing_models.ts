// sample for offline testing
export interface Apijsontest {
    id: number;
    name: string;
    age: number;
}

// gets
export interface GDailyQueue {
    QueueId: number;
    DepartmentId: number;
    Queue: number;
    Date: Date;
}

export interface GDepartments {
    DepartmentId: number,
    DepartmentName: String,
    Windows: number
}

export interface GUsers {
    UserID: number;
    Username: string;
    Password: string;
    Fname: string;
    Mname: string;
    Lname: string;
    IsAdmin: boolean;
    Email: string;
}

// posts 
export class UserLogin {
    constructor(
        username: string,
        password: string,
        IsAdmin: boolean
    ) {}
}

export class PDepartments {
    constructor(
        DepartmentName: String,
        Windows: number
    ) { }
}

    // { "id": 12, "name": "Andrew", "age": 12 },
    // { "id": 42, "name": "Bandrew", "age": 23 },
    // { "id": 68, "name": "Candrew", "age": 34 },
    // { "id": 76, "name": "Andrew", "age": 12 },
    // { "id": 86, "name": "Bandrew", "age": 23 },
    // { "id": 22, "name": "Candrew", "age": 34 }