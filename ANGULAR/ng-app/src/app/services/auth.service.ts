import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/auth-response';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = "AIzaSyCZaYYufRzvUyXOSLWOF4X1JSr5ASPYI9w"
  user = new Subject<User>()


  url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
  constructor(private http: HttpClient) { }
  register(email:string, password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {email: email, password: password, returnSecureToken: true}).pipe(
    tap(response =>{
      const expiresDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
      const user = new User(
        response.email,
        response.localId,
        response.idToken,
        expiresDate
      );
      this.user.next(user)
    }),   
    catchError(this.handleError)
    )
  }

  login(email:string,password:string){
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+this.api_key, {email: email, password: password, returnSecureToken: true}).pipe(
    tap(response =>{
      const expiresDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))
      const user = new User(
        response.email,
        response.localId,
        response.idToken,
        expiresDate
      );
      this.user.next(user)
    }),  
    catchError(this.handleError)
    )
  }
  private handleError(err:HttpErrorResponse){
    let message = "hata Olustu";

    if(err.error.error){
      switch(err.error.error.message){
        case "EMAIL_EXISTS":
          message = "Bu Mail Adresi Zaten Kullaniliyor";
          break;
        case "OPERATION_NOT_ALLOWED":
          message = "Giris Yasaklandi";
          break;
        case "TOO_MANY_ATTEMPTS_TRY_LATER":
          message = "Bir sure bekleyip tekrar dene";
          break;
        case "EMAIL_NOT_FOUND":
          message = "Email adresi bulunamadi";
          break;
        case "INVALID_PASSWORD":
          message = "Yalnis Sifre";
          break;
        case "USER_DISABLED":
          message = "Hesabiniz Devre Disi";
          break;
      }
    }

    return throwError(()=> message)
  }
}
