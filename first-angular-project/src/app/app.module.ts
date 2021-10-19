
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServersComponent } from './servers/servers.component';

import { NameEditorComponent } from './name-editor/name-editor.component';

import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router'; 

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  // { path: '', component:  },
 { path: 'login', component: LoginComponent },
 {path: 'homepage', component: HomepageComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ServersComponent,
    LoginComponent,
    NameEditorComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes), 
  ],
  exports: [
    RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
