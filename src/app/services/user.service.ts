import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private token: String;

  constructor(private http: HttpClient) { }

  public setToken(token: String) {
    this.token = token;
    console.log("Store token:", this.token);
  }

  public getDisplayName(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.get('http://localhost:3000/me', httpOptions);
  }

  public saveDisplayName(displayName: String): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };

    return this.http.patch('http://localhost:3000/me', {
      display: displayName
    }, httpOptions);
  }
}
