import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class CanActivateTeam implements CanActivate {
  constructor(
      private router: Router
  ) {}

  canActivate() {
      if (localStorage.getItem('Token')) {
          return true
        }
        
        else {
            this.router.navigate(['/login'])
            return false
        }
    return true
  }
   
}