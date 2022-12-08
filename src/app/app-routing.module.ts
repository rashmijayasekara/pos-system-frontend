import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCustomersComponent} from "./view/manage-customers/manage-customers.component";
import {PlaceOrderComponent} from "./view/place-order/place-order.component";
import {ManageItemsComponent} from "./view/manage-items/manage-items.component";
import {SearchOrdersComponent} from "./view/search-orders/search-orders.component";
import {DashboardComponent} from "./view/dashboard/dashboard.component";
import {LoginComponent} from "./view/login/login.component";
import {NavComponent} from "./view/nav/nav.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/app'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'app',
    component:NavComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        pathMatch:'full', // when only the empty string there the app will be redirected to the dashboard
        redirectTo:'dashboard'
      },
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
      },
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'app'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
