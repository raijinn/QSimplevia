// sample for offline testing
export interface Apijsontest {
    id: number;
    name: string;
    age: number;
}
// for fake back-end
export class User {
    id: number;
    Username: string;
    Password: string;
    firstName: string;
    lastName: string;
}

// GET
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
    FName: string;
    MName: string;
    LName: string;
    IsAdmin: boolean;
    Email: string;
    DepartmentId : number;
}
//GET FOR TELLER
export interface GTeller {
    FirstName: string,
    MiddleName: string,
    LastName: string,
    Email: string,
    Username: string,
    Password: string,
}


// POST || PUT
export class UserLogin {
    constructor(
        username: string,
        password: string,
        IsAdmin: boolean
    ) { }
}
export class PSDepartments {
    constructor(
        DepartmentName: String,
        Windows: number
    ) { }
}
//POST LOGIN
/*
export class PostLogin {
    constructor(
        username: string,
        password: string
    ) { }
}
*/
    // { "id": 12, "name": "Andrew", "age": 12 },
    // { "id": 42, "name": "Bandrew", "age": 23 },
    // { "id": 68, "name": "Candrew", "age": 34 },
    // { "id": 76, "name": "Andrew", "age": 12 },
    // { "id": 86, "name": "Bandrew", "age": 23 },
    // { "id": 22, "name": "Candrew", "age": 34 }

//POST FOR TELLER
//change to Fname,Mname,Lname
export class PostTeller {
    constructor(
        public Fname: string,
        public Mname: string,
        public Lname: string,
        public Email: string,
        public Username: string,
        public Password: string,
        public IsAdmin: boolean,
        public DepartmendId: number
    ) {}
}