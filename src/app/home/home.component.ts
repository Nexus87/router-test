import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDB } from '../app.module';
import { Observable } from 'rxjs';
import { increment, decrement } from '../ngrx/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  cnt$: Observable<number>;

  constructor(private store: Store<IDB>) {
    this.cnt$ = store.select(x => x.app.cnt);
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
