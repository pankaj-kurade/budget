import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {
  constructor(public router:Router){}
  lastmonthIncome=["jan","feb",'march'];
  currentMonth:any=15000
  
  lastmonthExpence=["april","may ",'june'];
  currentMonth_expence:any=3000
 


onTodo() {
throw new Error('Method not implemented.');
}
onExpance() {
throw new Error('Method not implemented.');
}
onIncome() {
  this.router.navigate(['./budget-planner/income']);


}
 todo_transection=[
  {description:'pay electricity bill'},
  {description:'submit monthly report'},
  {description:'buy grocry'},
  {description:'call bike service'}
];
totalsaving:number=0

ngOnInit(){

  this.totalsaving= this.currentMonth - this.currentMonth_expence;
  return this.totalsaving;

}
// get currentMonthSaving:number(){

//     return  this.currentMonth - this.currentMonth_expence;

//   }
}
