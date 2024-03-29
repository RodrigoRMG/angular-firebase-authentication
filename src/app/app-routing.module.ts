import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Routes
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

//Validate permissions
import { AuthGuard } from "./guard/auth.guard";
import {SecureInnerPagesGuard} from './guard/secure-inner-pages.guard'


const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent,canActivate: [SecureInnerPagesGuard]  },
  { path: 'register-user', component: SignUpComponent,canActivate: [SecureInnerPagesGuard]  },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent,canActivate: [SecureInnerPagesGuard]  },
  { path: 'verify-email-address', component: VerifyEmailComponent,canActivate: [SecureInnerPagesGuard]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
