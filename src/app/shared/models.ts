
export class User{
  name:string;
  login:string;
  email:string;
  password:string;
  constructor(params){
    this.name = params.name.trim();
    this.login = params.login.trim();
    this.email = params.email.trim();
    this.password = params.password;
  }
}
