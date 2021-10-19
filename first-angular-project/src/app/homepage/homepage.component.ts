import { Component } from "@angular/core";
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html'
})

export class HomepageComponent {

    logout() {
        localStorage.clear();
    }
}