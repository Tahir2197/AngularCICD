import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'forgot-Password', component: ForgotPasswordComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'admin', 
    canActivate: [AuthGuard],
    data: {
      role: 'admin'
    },
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  }, 
  { path: 'user', 
    canActivate: [AuthGuard],
    data: {
      role: 'user'
    },
    loadChildren: () => import('./modules/user/user.module').then((m) => m.UserModule)
  },  
  { path: '**', component: NotFoundComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
