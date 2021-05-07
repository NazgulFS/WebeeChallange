import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JWTResponse } from '../models/jwtresponse';
import { tap } from 'rxjs/operators';
import { AUTH_API_URL } from '../app.constants';
import { Observable, BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private httpClient: HttpClient) { }

  register(user:User): Observable<JWTResponse> {
    return this.httpClient.post<JWTResponse>(`${AUTH_API_URL}/register`,user).pipe(tap(
      (res:JWTResponse) => {
        if(res) {
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  login(user:User): Observable<JWTResponse> {
    return this.httpClient.post<JWTResponse>(`${AUTH_API_URL}/login`,user).pipe(tap(
      
      (res:JWTResponse) => {
        console.log(user)
        if(res) {
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ))
  }

  private saveToken(token:string, expiresIn:string):void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token
  }

  private getToken():string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token
  }
}
