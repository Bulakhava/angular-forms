import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {ConfirmationRegistrationComponent} from './confirmation-registration/confirmation-registration.component';

const routes: Routes = [
{path:'',pathMatch:'full', redirectTo:'registration'},
{path:'registration', component:RegistrationComponent},
{path:'confirmation-registration', component:ConfirmationRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
