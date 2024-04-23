import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget';
constructor(private router:Router){}
  ngOnInit(){
this.router.navigate(['./budget-planner/login'])
  }
}

