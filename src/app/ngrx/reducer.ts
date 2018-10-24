import { AppAction, AppActionKey } from './actions';

export interface AppState {
  cnt: number;
}

export const initalState: AppState = {
  cnt: 0
};

export function appReducer(state = initalState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionKey.decrement:
      return {
        cnt: state.cnt - 1
      };
    case AppActionKey.increment:
      return {
        cnt: state.cnt + 1
      };
    default:
      return state;
  }
}
