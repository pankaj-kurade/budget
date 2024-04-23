import { exit } from 'process';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import {MatInputModule} from '@angular/material/input';

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

  registeredData = [
    {
      email: 'pankajkurade085@gmail.com',
      password: 'Kurade',
      username: 'Pankaj',
    },
    {
      email: 'pankajkura@gmail.com',
      password: 'Kurade',
      username: 'suraj',
    },
  ];
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
    const formData = this.loginForm.value;
    if (this.loginForm.valid) {
      let checkUserPass=this.loginForm.value.username;
      console.log(checkUserPass,'checkpass');
      for (const key in this.registeredData) {
        if (this.registeredData[key].username===checkUserPass) {
          this.router.navigate(['./budget-planner/dashbord']);
          localStorage.setItem('username', formData.username);
          localStorage.setItem('password', formData.password);
        }
        else {
          console.log('Invalid Login Form Data:') ;
          this.snackBar.open('Please fill the form correctly', 'Close', {
            duration: 3000,
          });
        }

      }

    }
  }


  onRegister() {
    if (this.registerForm.valid) {
      var checkusername = this.registerForm.value.username;

      for (const key in this.registeredData) {
        // console.log(this.registeredData[key].username);
        if (this.registeredData[key].username === checkusername) {
          this.snackBar.open('username is already exites', 'Close', {
            duration: 3000,
          });
        } else {
          console.log(this.registeredData, 'before');

          var newregister_form = this.registerForm.value;
          this.registeredData.push(newregister_form);
          console.log(this.registeredData, 'after');
          break;
        }
        this.router.navigate(['./budget-planner/dashbord']);
        break;
      }
      // const formData = this.registerForm.value;
      // console.log('Register Form Data:', formData);
    } else {
      console.log('Invalid Register Form Data:', this.registerForm.value);
      this.snackBar.open('Please fill the form correctly', 'Close', {
        duration: 3000,
      });
    }
  }

}
