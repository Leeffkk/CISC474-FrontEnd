import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path='http://localhost:3000/api/security/'
  private _token:string=null;
  CurrentUser: ReplaySubject<string>=new ReplaySubject<string>();


  constructor(private http:HttpClient) { 
    this.CurrentUser.next(null);
  }

  get token():string{
    if (this._token==null){
      this._token=localStorage.getItem('token')
    }
    return this._token;
  }
  
  set token(val:string){
    this._token=val;
    if (val==null)
      localStorage.removeItem('token');
    else
      localStorage.setItem('token',val);
  }
  get loggedIn():boolean{
    return this.token!=null;
  }

  authorize():void{
    this.http.get(this.path+'authorize').subscribe(result=>{
      //on success, we do nothing because token is good
      if (result['status']!='success'){
        this.token=null;
      }
      else{
        this.CurrentUser.next(result['data'].email)
      }

    },err=>{
      this.token=null;
    });
  }

  login(email: string,password:string): Observable<any>{
    return this.http.post<any>(this.path+'login',{email: email,password: password })
      .pipe(map(user=>{
        this.token=user.data.token
        this.CurrentUser.next(user.data.user.email);
        return user.data.user;
      }),catchError(err=>{this.CurrentUser.next(null);this.token=null;return throwError(err.message||'server error')}));
  }
  logout(){
    this.token=null;
    this.CurrentUser.next(null);
  }
}
