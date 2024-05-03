import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonCurdComponent } from './person-curd/person-curd.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculateagePipe } from './pipe/calculateage.pipe';



import { SerachTextPipe } from './pipe/serach-text.pipe';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonCurdComponent,
    CalculateagePipe,
    SerachTextPipe,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
