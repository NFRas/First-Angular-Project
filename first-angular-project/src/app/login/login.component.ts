import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  email = '';
  // AllowNewServer = false;
  serverName = '';
  thePass = '';
  message = false;
  btnresult = "No account was created!"

  constructor() { 
  }

  ngOnInit(): void {
  }

  login() {
    this.message = true;
    this.btnresult = "The account was created with the email of" + this.serverName;
  }

 onUpdateServerName(event: Event) {
   this.serverName = (<HTMLInputElement>event.target).value;
 }

 working () {
   console.log(this.thePass);
   
 }
}
