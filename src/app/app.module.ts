import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { ShowMenuModalComponent } from './show-menu-modal/show-menu-modal.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ForgetComponent } from './forget/forget.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';

@NgModule({
  declarations: [AppComponent, Page1Component, HomeComponent, LoginComponent, RegisterComponent, PageNotFoundComponent, ContactUsComponent, AboutUsComponent, MenuComponent, LogoutModalComponent, ShowMenuModalComponent, AdminMenuComponent, AdminHomeComponent, ForgetComponent, DeleteUserModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
