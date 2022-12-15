import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

import { Global } from "./global";

@Injectable() 
export class UserService{
    public url: String;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
    }

    getUser(id: any, password: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
        return this._http.get(this.url+'get-user/'+id+'/'+password, {headers: headers});
    }
}