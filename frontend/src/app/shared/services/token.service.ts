import { Injectable } from '@angular/core';

const ACCESS_TOKEN = 'access_token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN)!;
  }

  saveToken(token: string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }
}
