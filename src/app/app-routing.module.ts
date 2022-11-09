import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './MainLayout/main-layout/main-layout.component';
import { EmailVerificationComponent } from './user/email-verification/email-verification.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'user',
  },
  { path: 'home', component: MainLayoutComponent },
  { path: 'user', component: UserComponent },
  { path: 'email/:id', component: EmailVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
