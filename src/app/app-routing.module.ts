import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCustomersComponent} from "./view/manage-customers/manage-customers.component";
import {PlaceOrderComponent} from "./view/place-order/place-order.component";
import {ManageItemsComponent} from "./view/manage-items/manage-items.component";
import {SearchOrdersComponent} from "./view/search-orders/search-orders.component";

const routes: Routes = [
  {
    path:'customers',
    component: ManageCustomersComponent
  },
  {
    path:'items',
    component: ManageItemsComponent
  },
  {
    path:'orders/new',
    component:PlaceOrderComponent
  },
  {
    path:'orders',
    component:SearchOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
