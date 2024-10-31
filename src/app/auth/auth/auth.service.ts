import { JsonPipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { User } from '../user.Model';
import { enviorment } from '../../../enviorments/enviorment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  errorMessage!: string;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponceData>(
        ' https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          enviorment.firebaseApiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resDat) => {
          this.handleAuthentication(
            resDat.email,
            resDat.localId,
            resDat.idToken,
            +resDat.expiresIn
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
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  login(email: string, password: string): Observable<AuthResponceData> {
    return this.http
      .post<AuthResponceData>(
        ' https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          enviorment.firebaseApiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resDat) => {
          this.handleAuthentication(
            resDat.email,
            resDat.localId,
            resDat.idToken,
            +resDat.expiresIn
          );
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => new Error(errorMessage));
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS ':
        errorMessage = 'This email already exists';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'This operation is not allowed';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts. Try again later.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage =
          ' There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        'The password is invalid or the user does not have a password.';
        break;
      case 'USER_DISABLED':
        ' The user account has been disabled by an administrator.';
        break;
      default:
        errorMessage = 'An unknown error occurred';
    }

    return throwError(() => new Error(errorMessage));
  }
}

export interface AuthResponceData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
