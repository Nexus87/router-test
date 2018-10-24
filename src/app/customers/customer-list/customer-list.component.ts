import { Component, OnInit } from '@angular/core';
import { State } from '../customers.module';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../ngrx/actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {

  cnt$: Observable<number>;

  constructor(private store: Store<State>) {
    this.cnt$ = store.select(x => x.customers.cnt);
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  ngOnInit() {
  }

}
