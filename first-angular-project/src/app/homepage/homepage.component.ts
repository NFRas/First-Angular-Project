import { Component } from "@angular/core";

import { UserService } from "./user.service";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})

export class HomepageComponent {

constructor(
    private userService: UserService){}

logout() {
    localStorage.clear();}

}