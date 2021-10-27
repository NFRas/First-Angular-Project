import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { LoginModel } from "../model/login.model";


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(
        private http: HttpClient
    ){}

    login(user: LoginModel): Observable<any> {
        return this.http.post<any>(`http://192.168.1.44:3000/identity/login`, user)
    }

 
}