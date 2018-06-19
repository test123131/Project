import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ListsComponent } from './lists-component/lists-component.component';
import { FormsComponent } from './forms-component/forms-component.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'list',component: ListsComponent},
  {path:'addnew',component: FormsComponent},
  {path:'**', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
