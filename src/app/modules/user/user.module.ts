import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserDashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
