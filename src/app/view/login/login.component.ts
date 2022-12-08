import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private router:Router) {
  }

  authenticate():void {
    if (this.username==='admin' && this.password=== 'admin'){
      const credentials=`${this.username}:${this.password}`;
      localStorage.setItem("token",btoa(credentials));
      this.router.navigateByUrl('/app');


    }else {
      localStorage.removeItem("token");
    }
  }
}
