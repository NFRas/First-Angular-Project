import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class UserService {
    constructor ( private http: HttpClient){}
    private userUrl = `http://192.168.1.44:3000/user/getAll`;

getUser(): Observable<string[]>{
    return this.http.get<string[]>(this.userUrl)
}


  
//   async function renderUsers() {
//     let users = await getUsers()
//     let html = '';
//     users.forEach( user => {
//       let htmlSegment = `<a href="../user-profile/userinfo.html?user=${user.login}">${user.login}</a> <br>`;
  
//       return html += htmlSegment;
//     });
  
//   document.write(html);
//   }
  
//   renderUsers();
  