import { Time } from "../../../node_modules/@angular/common";

// GET FOR WEB DQ
export interface GDailyQueue {
    QueueId: number;
    DepartmentId: number;
    Queue: number;
    Date: Date;
    Status: number;
}

// GET FOR DEPARTMENTS
export interface GDepartments {
    DepartmentId: number;
    DepartmentName: String;
    Windows: number;
}

// POST || PUT FOR DEPTS
export class PSDepartments {
    DepartmentName: String;
    Windows: number;
}

// GET FOR ANNOUNCEMENTS|EVENTS
export interface GAnnouncements {
    EventId: number;
    Description: string;
    Date: Date;
    Time: Time;
    Place: string;
    EventType: boolean;
    CreatedAt: Date;
}

// POST || PUT FOR ANNOUNCEMENTS|EVENTS
export class PSAnnouncements {
    Description: string;
    Date: Date;
    Time: Time;
    Place: string;
    EventType: boolean;
}

//GET FOR TELLER
export interface GTeller {
    UserId: number;
    Username: string;
    Password: string;
    FName: string;
    MName: string;
    LName: string;
    IsAdmin: boolean;
    Email: string;
    DepartmentId: number;
    DepartmentName: string;
}
// LOGIN(post) | Teller Post
export class Users {
    UserId: number;
    Username: string;
    Password: string;
    FName: string;
    MName: string;
    LName: string;
    IsAdmin: boolean;
    Email: string;
    DepartmentId: number;
}




