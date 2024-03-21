
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService  {
  constructor(private router: Router) {}

  canActivate: boolean =  true


}
