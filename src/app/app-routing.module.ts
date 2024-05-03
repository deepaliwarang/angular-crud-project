import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { PersonCurdComponent } from './person-curd/person-curd.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},

  {path:"login" ,component:LoginComponent},
  {path:"header" ,component:HeaderComponent},

  { path: "Person-List", component: PersonComponent },
  { path: 'Person-Curd', component: PersonCurdComponent },
  { path: 'Person-Curd-Update/:id', component: PersonCurdComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
