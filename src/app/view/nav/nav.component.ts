import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {ManageCustomersComponent} from "../manage-customers/manage-customers.component";
import {ManageItemsComponent} from "../manage-items/manage-items.component";
import {PlaceOrderComponent} from "../place-order/place-order.component";
import {SearchOrdersComponent} from "../search-orders/search-orders.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  datetime: number=Date.now();
  activatedRoute: string="Dashboard";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private activeRoute:ActivatedRoute, private router: Router) {


  }

  ngOnInit(): void {
    setInterval(() => this.datetime = Date.now(),900)
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
          switch (event.url){
            case '/dashboard':
              this.activatedRoute="Dashboard";
              break;
            case '/customers':
              this.activatedRoute="Manage Customers";
              break;
            case '/items':
              this.activatedRoute="Manage Items";
              break;
            case '/orders/new':
              this.activatedRoute="Place Order";
              break;
            case '/orders':
              this.activatedRoute="Search Order";
              break;
          }
      }
    });





  }



}
