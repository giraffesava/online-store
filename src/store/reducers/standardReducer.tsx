import ActionTypes from '../actionTypes';
import { Action } from '../../components/types/types';

const initialStore = {
  standardTickets: 0,
};

const standardReducer = (state = initialStore, action:Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TICKETS_STANDARD:
      return {
        ...state,
        standardTickets: state.standardTickets + 1,
      };
    case ActionTypes.DECREMENT_TICKETS_STANDARD:
      return {
        ...state,
        standardTickets: state.standardTickets - 1,
      };
    default:
      return state;
  }
};

export default standardReducer;
