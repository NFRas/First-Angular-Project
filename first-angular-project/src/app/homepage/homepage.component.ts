import { Component } from "@angular/core";
import { UserModel } from "src/shared/model/user.model";

import { UserService } from "../Users/user.service";
import { UserProfileService } from "../Users/userProfile.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})

export class HomepageComponent {
users: UserModel[]=[]
profile: UserModel[] = []
constructor(
    private userService: UserService,
    private userProfileService: UserProfileService){}

logout() {
    localStorage.clear();}

    getUser(){
        //Not needed right now
        this.userService.getAllUser().subscribe(res => {
            res[0].username == 'sheyda' ? console.log("admin"): null;
            this.users=res;
        })
    }

    // getProfile(){
    //     this.userProfileService.getProfile().subscribe();
    //     this.profile
    // }
}