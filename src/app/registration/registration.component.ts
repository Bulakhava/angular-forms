import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../shared/service';
import { User } from '../shared/models';
import { registr } from '../shared/data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss','../app.component.scss']
})
export class RegistrationComponent implements OnInit {

  userForm:FormGroup;
  user:any = {};
  validate:boolean = false;
  matchPasswords:boolean = true;
  registr:any = null;

  constructor(
     private service:RegistrationService,
     private router: Router
    ) {}

  changeLanguage(leng:string){
    this.service.language = leng;
  }

  hideMessage(){
    this.matchPasswords = true;
  }

  makeValidation(){
    this.validate = true;
  }

  onSubmit(){

    this.makeValidation();

    if(this.user.password && this.user.password !== this.user.repeatPassword){
      this.matchPasswords = false;
    }
    if(this.user.password && this.user.password === this.user.repeatPassword){
      this.matchPasswords = true;
    }
    if(this.user.password && this.user.password === this.user.repeatPassword &&
      !this.userForm.invalid){
       this.matchPasswords = true;
       let newUser = new User(this.user);
       this.service.user = newUser;
       this.router.navigate(['confirmation-registration']);
       //console.log(this.service.user);
    }

  }

ngOnInit() {

     this.registr = registr;

     this.userForm = new FormGroup({
      name:new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(30),
           Validators.pattern("^[0-9a-zA-Zа-яА-Я'][0-9a-zA-Zа-яА-Я-' ]+[0-9a-zA-Zа-яА-Я']?$")
        ])),
     login:new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(30),
           Validators.pattern("^[0-9a-zA-Zа-яА-Я'][0-9a-zA-Zа-яА-Я-' ]+[0-9a-zA-Zа-яА-Я']?$")
        ])),
     email:new FormControl('', Validators.compose([
           Validators.required,
           Validators.email
        ])),
     password:new FormControl('', Validators.compose([
           Validators.required,
           Validators.minLength(6),
           Validators.maxLength(30),
           Validators.pattern('^[a-zA-Z0-9]+$')
        ])),
      repeatPassword:new FormControl('', Validators.compose([
           Validators.required

        ])),

    });

    }


}
