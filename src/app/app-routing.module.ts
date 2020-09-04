import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'forget', component: ForgetComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: MenuComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    children: [{ path: '', component: AdminMenuComponent }],
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
