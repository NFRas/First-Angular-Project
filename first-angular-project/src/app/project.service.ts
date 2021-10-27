
import { Injectable } from "@angular/core";


@Injectable ({
  providedIn: 'root'
})
export class ProjectService {



  loginUser(username: string, password: string) {
    localStorage.setItem('username', username),
    localStorage.setItem('password', password)
  }

}