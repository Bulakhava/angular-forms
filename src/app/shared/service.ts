import {Injectable} from '@angular/core';
import {User} from './models';

@Injectable()
export class RegistrationService{
   language:string = 'eng';
   user:User;
}
