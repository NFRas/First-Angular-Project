
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServersComponent } from './servers/servers.component';


import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {CanActivateTeam} from '../shared/guard/test.guard'


const routes: Routes = [
  { path: '',
  redirectTo: 'login',
  pathMatch: 'full' },
 { path: 'login', component: LoginComponent },
 {path: 'homepage', component: HomepageComponent, canActivate: [CanActivateTeam]},

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServersComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
