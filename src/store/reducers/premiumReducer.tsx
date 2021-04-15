import ActionTypes from '../actionTypes';
import { Action } from '../../components/types/types';

const initialStore = {
  premiumTickets: 0,
};

const premiumReducer = (state = initialStore, action:Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TICKETS_PREMIUM:
      return {
        ...state,
        premiumTickets: state.premiumTickets + 1,
      };
    case ActionTypes.DECREMENT_TICKETS_PREMIUM:
      return {
        ...state,
        premiumTickets: state.premiumTickets - 1,
      };
    default:
      return state;
  }
};

export default premiumReducer;
