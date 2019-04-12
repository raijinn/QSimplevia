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
    Time: Date;
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

//GET || POST || PUT FOR TELLER
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

// GET REPORTS
export interface Reports {
    ReportId: number;
    DepartmentId: number;
    DepartmentName: string;
    Queue: number;
    Date: Date;
    WindowNum: number;
}

// GET AUDIT TRAIL
export class Audits {
    TrailId: number;
    UserId: number;
    Admin: string;
    UserActivity: string;
    CreatedAt: Date;
}

// GET DASHBOARD Count(*) Totals
export interface TDashNum {
    countNum: number;
}

