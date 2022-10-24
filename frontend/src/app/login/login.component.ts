import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoadingResults = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['mostafa', Validators.required],
      password: ['123456', Validators.required],
    });
  }

  onFormSubmit(): void {
    this.isLoadingResults = true;
    this.authService.login(this.loginForm.value).pipe(
      tap(() => {
        this.isLoadingResults = false;
        this.router.navigate(['/main']);
      })
    ).subscribe(),
      (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      };
  }
}
