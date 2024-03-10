import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


// import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
  
})
export class LoginComponent {


loginForm:any;
registerForm:any;
activeForm:'login'|'register' = 'login';
constructor(private fb:FormBuilder,private _snackBar: MatSnackBar){}

toggle(form :'login'|'register') {

  this.activeForm= form

  // alert("alr")
}
ngOnInit(){
this.loginForm=this.fb.group({
  email:['',[Validators.required,Validators.email]],
  passwrd:['',Validators.required]
});
this.registerForm=this.fb.group({
username:['',Validators.required],
email:['',[Validators.required,Validators.email]]

})

}

onsubmit() {
  if(this.loginForm.valid){
    console.log(this.loginForm.value);
    
  }
  else{
    console.log("he");

    this._snackBar.open("message");

  }
  
  }
}
