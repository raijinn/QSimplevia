

//user model -- for login
export class Users {
    UserId:number;
    Username:string;
    Password:string;
    FName:string;
    MName:string;
    LName:string;
    IsAdmin:boolean;
    Email:string;
    DepartmentId:number;
}



// GET USERS
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

// GET FOR WEB DQ
export interface GDailyQueue {
    QueueId: number;
    DepartmentId: number;
    Queue: number;
    Date: Date;
    IsActive: boolean;
}

// GET FOR DEPARTMENTS
export interface GDepartments {
    DepartmentId: number;
    DepartmentName: String;
    Windows: number;
}

// POST || PUT FOR DEPTS
export class PSDepartments {
    constructor(
        DepartmentName: String,
        Windows: number,
    ) { }
}

// GET FOR ANNOUNCEMENTS|EVENTS
export interface GAnnouncements {
    EventId: number;
    Description: string;
    EventType: boolean;
    CreatedAt: Date;
    Image: Blob;
}

// POST || PUT FOR ANNOUNCEMENTS|EVENTS
export class PSAnnouncements {
    Description: string;
    EventType: boolean;
    Image: string;
}

//GET FOR TELLER
export interface GTeller {
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Email: string,
    Username: string,
    Password: string
}

// POST || PUT FOR TELLER
export class UserLogin {
    constructor(
        username: string,
        password: string,
        IsAdmin: boolean
    ) { }
}


