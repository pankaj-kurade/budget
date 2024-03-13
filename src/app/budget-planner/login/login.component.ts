import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: any;
  registerForm: any;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  toggle(form: 'login' | 'register') {
    this.activeForm = form;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log('Login Form Data:', formData);
      this.router.navigate(['/budget-planner/dashbord']);
    } else {
      console.log('Invalid Login Form Data:', this.loginForm.value);
      this.snackBar.open('Invalid email or password', 'Close', {
        duration: 3000,
      });
    }
  }

  onRegister() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Register Form Data:', formData);
      // Redirect or do something with the form data
      this.router.navigate(['./bdge']);
    } else {
      console.log('Invalid Register Form Data:', this.registerForm.value);
      this.snackBar.open('Please fill the form correctly', 'Close', {
        duration: 3000,
      });
    }
  }
}
