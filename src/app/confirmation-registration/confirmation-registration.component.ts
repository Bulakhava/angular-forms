import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../shared/service';
import { confirm } from '../shared/data';

@Component({
  selector: 'app-confirmation-registration',
  templateUrl: './confirmation-registration.component.html',
  styleUrls: ['./confirmation-registration.component.scss','../app.component.scss']
})
export class ConfirmationRegistrationComponent implements OnInit {

  confirm:any = null;
  message:boolean = false;

  constructor(
    private service:RegistrationService,
    ) { }

  changeLanguage(leng:string){
    this.service.language = leng;
  }

  showMessage(){
    this.message = true;
  }

  ngOnInit() {
    this.confirm = confirm;
  }

}
