import { Component } from '@angular/core';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent {
data:any;
  onsubmit(form:any){
  
console.log(form.value)
  }


}
