import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// class AlwaysAuthGuard implements CanActivate {
//   canActivate() {
//     console.log("AlwaysAuthGuard");
//     return true;
//   }
// }

export class LoginComponent implements OnInit {
  // formCon = true

  email = '';
  // AllowNewServer = false;
  serverName = '';
  thePass = '';
  message = false;
  btnresult = "No account was created!";

  account = new FormGroup({
      emailinfo : new FormControl('', [Validators.required]),
      nameinfo : new FormControl('', [Validators.required, Validators.maxLength(30)]),
      passinfo : new FormControl('', [Validators.required, Validators.maxLength(10)]),
      repassinfo: new FormControl ('', [Validators.required, Validators.maxLength(10)])
    });

  constructor() { 
  
  }

  ngOnInit(): void {
  }

  login() {
    this.message = true;
    localStorage.setItem('username', this.account.controls.nameinfo.value)
    this.btnresult = "The account was created with the email of" + this.serverName;
  }

 onUpdateServerName(event: Event) {
   this.serverName = (<HTMLInputElement>event.target).value;
 }

 working () {
   console.log(this.thePass);
   
 }
}

