import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";


@Injectable ({
  providedIn: 'root'
})
export class ProjectService {



  loginUser(username: string, password?: string) {
    localStorage.setItem('username', username)
  }

}