import { Action } from '@ngrx/store';

export enum CustomerActionKey {
  increment = '[Customers] Increment',
  decrement = '[Customers] Decrement'
}

export interface IncrementAction extends Action {
  type: CustomerActionKey.increment;
}

export function increment(): IncrementAction {
  return {
    type: CustomerActionKey.increment
  };
}

export interface DecrementAction extends Action {
  type: CustomerActionKey.decrement;
}

export function decrement(): DecrementAction {
  return {
    type: CustomerActionKey.decrement
  };
}

export type CustomerAction = IncrementAction | DecrementAction;
