import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './content/user.component';
import { UserModule } from './content/user.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavModule } from './sidenav/sidenav.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{UserPipe } from './pipe/user.pipe'
import { UserService } from './content/user.service';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    UserComponent,
    SidenavComponent,
    UserPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    MenuModule,
    UserModule,
    SidenavModule,
    FormsModule ,
    HttpClientModule
  ],
  exports: [
  ],
  providers:[UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
