
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
}

// GET FOR DEPARTMENTS
export interface GDepartments {
    DepartmentId: number;
    DepartmentName: String;
    Windows: number;
}

// POST FOR DEPTS
export class PSDepartments {
    constructor(
        DepartmentName: String,
        Windows: number,
    ) { }
}

// GET FOR ANNOUNCEMENTS|EVENTS
export class GAnnouncements {
    EventId: number;
    Description: string;
    EventType: boolean;
    CreatedAt: Date;
    Image: ImageBitmap;
}

// POST || PUT FOR ANNOUNCEMENTS|EVENTS

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


