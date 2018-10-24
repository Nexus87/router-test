import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer, CustomerState } from './ngrx/reducer';

export interface State {
  customers: CustomerState;
}

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', customerReducer)
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
