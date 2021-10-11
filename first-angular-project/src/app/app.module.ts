import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
