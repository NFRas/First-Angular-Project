import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import {CanActivateTeam} from '../shared/guard/test.guard'
import {PageNotFoundComponent} from '../shared/Error/pageNotFound.component'
import { UserComponent } from './Users/user.component';

// import { AppRoutingModule } from './app-routing.module'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

 {
    path: 'login',
    component: LoginComponent },
 {path: 'homepage', component: HomepageComponent, canActivate: [CanActivateTeam]},
 { path: '**', component: PageNotFoundComponent },
 { path: 'profile/:id', component: UserComponent },

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
    HttpClientModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  exports: [],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
