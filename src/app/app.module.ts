import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './products.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserinfoComponent } from './userinfo/userinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    PageNotFoundComponent,
    UserComponent,
    UserlistComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
