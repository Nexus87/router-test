import { Action } from '@ngrx/store';

export enum AppActionKey {
  increment = '[App] Increment',
  decrement = '[App] Decrement'
}

export interface IncrementAction extends Action {
  type: AppActionKey.increment;
}

export function increment(): IncrementAction {
  return {
    type: AppActionKey.increment
  };
}

export interface DecrementAction extends Action {
  type: AppActionKey.decrement;
}

export function decrement(): DecrementAction {
  return {
    type: AppActionKey.decrement
  };
}

export type AppAction = IncrementAction | DecrementAction;
