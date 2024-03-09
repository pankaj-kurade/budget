import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
    BudgetPlannerRoutingModule
  ]
})
export class BudgetPlannerModule { }
