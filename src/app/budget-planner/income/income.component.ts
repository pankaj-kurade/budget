import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent {
filterIncomes: any;
  SubmitAdd() {
    throw new Error('Method not implemented.');
  }
  monthSelected: boolean = true;

  calculateTotalIncome(month: string) {
    let totalincome = 0;
    for (const income of this.getIncomeForMonth(month)) {
      totalincome += income.amount;
    }
    return totalincome;
  }
  
  getIncomeForMonth(month: string) {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;

      default:
        return [];
    }
  }
  onchange(event: any) {
    // alert(event)
    this.selectmonth = event;
    console.log(this.selectmonth);
    this.getFilterdIncome();
  }
  data: any;
  incomeForm: any;
  selectmonth: any;
  januaryIncomes: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)' },
    { source: 'Freelancing', amount: 1000, investments: 'Stocks' },
  ];
  
  februaryIncomes: any[] = [
    {
      source: 'Salary',
      amount: 5500,
      investments: '401(k)',
    },
    { source: 'Rental Income', amount: 700, investments: 'Real Estate' },
  ];

  marchIncomes: any[] = [
    {
      source: 'Salary',
      amount: 5200,
      investments: '401(k)',
    },
    { source: 'Freelancing', amount: 1200, investments: 'Stocks' },
    { source: 'Rental Income', amount: 600, investments: 'Real Estate' },
  ];
  constructor(public fb: FormBuilder, public rout: Router) {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
    console.log('contrictor');
    const currentDate = new Date();
    this.selectmonth = currentDate.toLocaleString('default', { month: 'long' });
    console.log(this.selectmonth);
  }

  ngOnInit() {
    console.log(this.januaryIncomes,"janincome");
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],
    });
  }

  // onChange(event: any) {

  // }

  back_toDashbord() {
    this.rout.navigate(['./budget-planner/dashbord']);
    // this.rout.navigate(['./budget-planner/income']);
  } 
  getFilterdIncome() {
    var filterIncomes: any[] = [];
    switch (this.selectmonth) {
      case 'January':
        filterIncomes = this.januaryIncomes;
        break;
      case 'February':
        filterIncomes = this.februaryIncomes;
        break;
      case 'March':
        filterIncomes =this.marchIncomes;
        break;
      default:
        break;
    }
    console.log(filterIncomes,"case")
    
    return filterIncomes;
   
  }

  onsubmit() {
    console.log(this.incomeForm.value)
  }
}
