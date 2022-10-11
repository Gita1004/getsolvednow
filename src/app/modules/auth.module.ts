import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutes } from '../routes/auth.routes';
import { LoginComponent } from '../pages/login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutes
  ]
})
export class AuthModule { }
