import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  items: MenuItem[] = [
    {
      routerLink: '/',
      label: 'Home'
    },
    {
      routerLink: '/orders',
      label: 'Orders'
    },
    {
      routerLink: '/customers',
      label: 'Customers'
    }
  ];
  title = 'router-test';
}
