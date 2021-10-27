import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserModel } from "src/shared/model/user.model";

@Injectable ({
    providedIn: 'root'
})

export class UserService {
    constructor ( private http: HttpClient){}
    private userUrl = `https://jsonplaceholder.typicode.com/users`;

getUser(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.userUrl)
}
}
