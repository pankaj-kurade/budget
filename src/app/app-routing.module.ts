import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'budget-planner',loadChildren:()=> import('./budget-planner/budget-planner.module').then(mode=>mode.BudgetPlannerModule)
  },
  {path:'admin',loadChildren:()=> import('./app.module').then(mod=>mod.AppModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
