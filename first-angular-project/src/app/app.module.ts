import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router'; //, Routes ham dasht
import { NameEditorComponent } from './name-editor/name-editor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
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
