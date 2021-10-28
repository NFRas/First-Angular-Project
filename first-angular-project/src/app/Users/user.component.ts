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

    constructor (private userProfileService: UserProfileService,
        private http: HttpClient){}

    profile: UserModel[] = []
    

ngOnInit() {
    this.getProfile();
}

getProfile(){
    this.userProfileService.getProfile('0').subscribe(res =>{
        //res[0].username == 'sheyda' ? console.log("admin"): null;
        this.profile=res;
        console.log(this.profile);
        
    })
}

}