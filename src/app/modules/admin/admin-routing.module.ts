import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
  children: [ 
              { path: 'home', component: HomeComponent },
              { path: 'services', component: ServicesComponent }, 
              { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
            ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
