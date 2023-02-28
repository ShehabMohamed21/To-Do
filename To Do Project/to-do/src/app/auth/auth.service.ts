import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { UserModel } from '../shared/user.model';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<UserModel>();
  isAuthenticated = false;
  beginDone = true;
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLnsacb-5Hha32Qjm_4fcdocpD4osj5ow',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn // undefined
          );
        })
      );
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLnsacb-5Hha32Qjm_4fcdocpD4osj5ow',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log(resData);
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const newUser = new UserModel(email, userId, token, expDate);
    this.isAuthenticated = true;
    this.user.next(newUser);
  }

  private handleError(errorResp: HttpErrorResponse) {
    let errorMesssage = 'An unkown error occurred !!';
    if (!errorResp.error || !errorResp.error.error) {
      return throwError(errorMesssage);
    }
    switch (errorResp.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMesssage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMesssage = 'This email does not exist or password is in correct';
        break;
      case 'INVALID_PASSWORD':
        errorMesssage = 'This email does not exist or password is in correct';
        break;
    }
    return throwError(errorMesssage);
  }
}
