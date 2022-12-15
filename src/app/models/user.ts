export class User{
    constructor(
        public _id: string,
        public role: string,
        public name: string,
        public email: string,
        public password: string
    ){}
}