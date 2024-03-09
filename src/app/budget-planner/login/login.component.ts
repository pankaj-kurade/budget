import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

onsubmit() {
throw new Error('Method not implemented.');
}
loginForm:any;
registerForm:any;
activeForm:'login'|'register' = 'login';
constructor(private fb:FormBuilder){}

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
}
