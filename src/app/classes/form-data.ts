export class FormData {  
    constructor(
        public trans_date: Date,
        // use same id for multiple transactions
        public id: number,
        public fname: string,
        public lname: string,
        public mname: string,
        public trans_type: string,
        public department: string,
        public purpose: string
    ){
        function fullname() {
            return this.lname + ", " + fname + " " + mname;
        }
    }
}
