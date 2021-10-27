import { Component } from "@angular/core";
import { UserModel } from "src/shared/model/user.model";

import { UserService } from "../Users/user.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})

export class HomepageComponent {
users: UserModel[]=[]
constructor(
    private userService: UserService){}

logout() {
    localStorage.clear();}

    getUser(){
        this.userService.getUser().subscribe(res =>{
            res[0].name == 'kjngs' ? console.log("admin"): null;
            this.users=res;
        })
    }

}