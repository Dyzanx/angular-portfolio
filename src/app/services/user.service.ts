import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

import { Global } from "./global";

@Injectable() 
export class UserService{
    public url: String;
    public userData: any;

    constructor(
        private _http: HttpClient,
    ){
        this.url = Global.url;
        this.userData = false;
    }

    getUser(id: any, password: any): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json'); 
        return this._http.get(this.url+'get-user/'+id+'/'+password, {headers: headers});
    }

    verifyUserCookie() {
        var value = false;
        let cookies = document.cookie;
        if(cookies.includes("user")){
            let myArray = cookies.split("user=");
            this.userData = myArray[1].split(';');
            this.userData = JSON.parse(this.userData[0]);
        
            if(this.userData){
            value = true;
            }
        
            // console.log(this.userData);
        }
        return value;
      }


    delete_cookie(cookie_name: any){
        var cookie_date = new Date ();
        cookie_date.setTime(cookie_date.getTime()-1);
        cookie_date.toString();
        // console.log("borrando borrando borrando--------");
        // console.log(cookie_date);
        document.cookie = cookie_name += "=; expires=" + cookie_date;
    }

}