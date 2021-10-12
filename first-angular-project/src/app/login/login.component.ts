import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email = 'alibarkook@gmail.com';
  message = 'please make sure to fill out the email!';
  AllowNewServer = false;
  serverName = '';
  thePass = 'test';

  constructor() { 
    setTimeout( () => {
      this.AllowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  login() {
  this.message = 'you have filled the email fully';
  }

 onUpdateServerName(event: Event) {
   this.serverName = (<HTMLInputElement>event.target).value;
 }

 working () {
   console.log(this.thePass);
   
 }
}
