import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModel } from 'src/shared/model/login.model';
import { LoginService } from 'src/shared/service/login.service';
import { ProjectService } from '../project.service';
// import { HomepageComponent} from '../homepage/homepage.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [],
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
    private projectservice: ProjectService,
    private loginService: LoginService,
    private router: Router
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

      // this.projectservice.loginUser(this.account.controls.nameinfo.value)

      let login: LoginModel = new LoginModel();

      login.password = this.account.controls.passinfo.value
      login.username = this.account.controls.nameinfo.value

      this.loginService.login(login).subscribe(res => {
        console.log(res);

      localStorage.setItem('Token' , res);
      this.tokenfunc();
      this.router.navigate(['homepage']);
      this.openhomepage();

      })

      this.btnresult = "The account was created with the email of" + this.serverName;
    }
  
   onUpdateServerName(event: Event) {
     this.serverName = (<HTMLInputElement>event.target).value;
   }
  
   working () {
     console.log(this.thePass);
     
   }

   tokenfunc() {
     if ('Token' === null) {
       alert('Wrong Pass or user');
     }
     else {
       alert('it works');
     }
    }

    openhomepage() {
        this.router.navigate(['homepage']);
      }
      
}
