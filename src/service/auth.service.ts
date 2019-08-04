import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
     "Access-Control-Allow-Origin": "*",
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  domain = environment.url;
  constructor(private http: HttpClient) { 
    
  }

  getUserListByEmail(){
    return this.http.get(this.domain+`email/`,httpOptions);
  }

  addUserEmail(data){
    return this.http.post(this.domain + `email/`, data)
  }

  updateEmailById(idtableEmail,data){
    return this.http.put(this.domain + `email/${idtableEmail}`,data)
  }

  deleteEmailById(idtableEmail){
    return this.http.delete(this.domain + `email/${idtableEmail}`)
  }
 
}
