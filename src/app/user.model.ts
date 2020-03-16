
export class User {
    public firstname: string;
    public lastname: string;
    public gender: string;
    public collegename: string;
    public email: string;
    public password: string;
    public confirmpassword: string;


    constructor(fname: string,lname: string,
        gender: string,collegename: string,
        email: string,
        password: string,confirmpassword: string)
        {
            this.firstname = fname;
            this.lastname = lname;
            this.gender = gender;
            this.collegename = collegename;
            this.email = email;
            this.password = password;
            this.confirmpassword = confirmpassword;
        }
}