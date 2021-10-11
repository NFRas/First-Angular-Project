import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = 'alibarkook@gmail.com';

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    
  }

  registerResults () {

    if (this.email.length == 0 ) { 
       alert("Please fill out all the information fields");  

    return false; 
    }  	

    else {
        alert("You have fully entered all the information!");

    // window.open( "../Homepage-Bootstrap/homepage.html", "_self");
  }
}
