import { CustomerAction, CustomerActionKey } from './actions';

export interface CustomerState {
  cnt: number;
}

export const initalState: CustomerState = {
  cnt: 0
};

export function customerReducer(state = initalState, action: CustomerAction): CustomerState {
  switch (action.type) {
    case CustomerActionKey.decrement:
      return {
        cnt: state.cnt - 1
      };
    case CustomerActionKey.increment:
      return {
        cnt: state.cnt + 1
      };
    default:
      return state;
  }
}
