import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './view/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ManageCustomersComponent } from './view/manage-customers/manage-customers.component';
import { PlaceOrderComponent } from './view/place-order/place-order.component';
import { ManageItemsComponent } from './view/manage-items/manage-items.component';
import { SearchOrdersComponent } from './view/search-orders/search-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ManageCustomersComponent,
    PlaceOrderComponent,
    ManageItemsComponent,
    SearchOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
