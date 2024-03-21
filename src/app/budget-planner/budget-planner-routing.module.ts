import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { IncomeComponent } from './income/income.component';
import { AuthguardService } from './authguard.service';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: 'side-nav',
    component: SideNavComponent,
  },
  {path:'dashbord',component:DashbordComponent},
  { path:'income',component:IncomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudgetPlannerRoutingModule {}
