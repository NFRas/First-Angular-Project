import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/shared/model/user.model";
import { HttpClient } from "@angular/common/http";
// import { Observable } from "rxjs";

import { UserProfileService } from "./userProfile.service";

@Component({
selector: 'user-component',
templateUrl: './user.component.html',
})

export class UserComponent implements OnInit{
    userJson: any;

    constructor (
        private userProfileService: UserProfileService,
        private http: HttpClient){}

    profile: UserModel = new UserModel();
    

ngOnInit() {
    this.getProfile();
}

getProfile(){
    let id ='0'
    this.userProfileService.getProfile(id).subscribe(res =>{
        //res[0].username == 'sheyda' ? console.log("admin"): null;
        this.profile=res;
        // localStorage.setItem("user", JSON.stringify(this.profile));
        // JSON.parse("user");
        this.userJson = JSON.stringify(res)
        console.log(this.profile);
        
    })
}

}