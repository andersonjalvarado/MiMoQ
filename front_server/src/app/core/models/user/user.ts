export class User {
    public id?:number | null;
    public name?: string | null;
    public email?: string | null;
    public phone?: number | null;
    public pass?: string | null;

    constructor(name?: string | null,  email?: string | null, phone?: number | null, pass?: string | null){
        this.name = name,
        this.email = email,
        this.phone = phone,
        this.pass = pass
    }
}