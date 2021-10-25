import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[],
})

// class AlwaysAuthGuard implements CanActivate {
//   canActivate() {
//     console.log("AlwaysAuthGuard");
//     return true;
//   }
// }

export class LoginComponent implements OnInit {
  // formCon = true

  constructor(
    private projectservice: ProjectService
  ) { 
  }

  ngOnInit(): void {
  }


  email = '';
  // AllowNewServer = false;
  serverName = '';
  thePass = '';
  message = false;
  btnresult = "No account was created!";

  result: [] = []; //not sure what this is excatly

  account = new FormGroup({
      emailinfo : new FormControl('', [Validators.required]),
      nameinfo : new FormControl('', [Validators.required, Validators.maxLength(30)]),
      passinfo : new FormControl('', [Validators.required, Validators.maxLength(10)]),
      repassinfo: new FormControl ('', [Validators.required, Validators.maxLength(10)])
    });

    login() {
      this.message = true;
      // localStorage.setItem('username', this.account.controls.nameinfo.value)

      this.projectservice.loginUser(this.account.controls.nameinfo.value)

      this.btnresult = "The account was created with the email of" + this.serverName;
    }
  
   onUpdateServerName(event: Event) {
     this.serverName = (<HTMLInputElement>event.target).value;
   }
  
   working () {
     console.log(this.thePass);
     
   }

}

