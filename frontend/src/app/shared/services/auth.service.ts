import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  login(loginData: any): Observable<any> {
    return this.http
      .post<any>(environment.apiUrl + '/login', {
        username: loginData.username,
        password: loginData.password,
      })
      .pipe(
        tap((res) => {
          debugger;
          this.tokenService.saveToken(res.access_token);
          this.router.navigate(['/main']);
        }),
        catchError(
          tap((err) => {
            console.log(err);
          })
        )
      );
  }

  logout(): void {
    this.tokenService.removeToken();
  }
}
