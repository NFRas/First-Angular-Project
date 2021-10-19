import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  formCon = true

  email = '';
  // AllowNewServer = false;
  serverName = '';
  thePass = '';
  message = false;
  btnresult = "No account was created!";

  account = new FormGroup({
    emailinfo : new FormControl('example@email.com', [Validators.required]),
    nameinfo : new FormControl('', [Validators.required, Validators.maxLength(15)]),
    passinfo : new FormControl('', [Validators.required, Validators.maxLength(10)]),
  });

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
