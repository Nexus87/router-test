import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer, CustomerState } from './ngrx/reducer';
import { SharedModule } from '../shared/shared.module';

export interface State {
  customers: CustomerState;
}

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers', customerReducer),
    SharedModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
