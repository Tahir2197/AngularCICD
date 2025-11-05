import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent,
  children: [ 
              { path: 'home', component: HomeComponent },
              { path: '', redirectTo: '/user/home', pathMatch: 'full' },
            ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
