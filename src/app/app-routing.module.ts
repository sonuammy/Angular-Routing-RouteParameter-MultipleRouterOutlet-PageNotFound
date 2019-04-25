import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products/:brandname', component: ProductComponent},

  // 1 start Multiple router-outlet
  // {path: 'user', component: UserComponent},
  // {path: 'userlist', component: UserlistComponent, outlet: 'uList' },
  // {path: 'userinfo', component: UserinfoComponent, outlet: 'uInfo' },
  // 1 end Multiple router-outlet

  // 2 start Multiple router-outlet
  {path: 'user', children:[
    {path:'', component: UserComponent },
    {path: 'userlist', component: UserlistComponent, outlet: 'uList' },
    {path: 'userinfo', component: UserinfoComponent, outlet: 'uInfo' },
  ]},
  // 2 end Multiple router-outlet

  {path: '**', component: PageNotFoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
