import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPlannerRoutingModule } from './budget-planner-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatIconModule} from '@angular/material/icon';
import { DashbordComponent } from './dashbord/dashbord.component';
import { IncomeComponent } from './income/income.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LoginComponent,SideNavComponent, DashbordComponent, IncomeComponent
  ],
  imports: [FormsModule,MatSlideToggleModule,MatInputModule,MatFormFieldModule,
    CommonModule,ReactiveFormsModule,MatSnackBarModule,MatSelectModule,MatCheckboxModule,
    BudgetPlannerRoutingModule,MatButtonModule,MatIconModule
  ]
})
export class BudgetPlannerModule { }
