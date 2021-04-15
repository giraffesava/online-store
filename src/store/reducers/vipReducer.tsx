import ActionTypes from '../actionTypes';
import { Action } from '../../components/types/types';

const initialStore = {
  vipTickets: 0,
};

const standardReducer = (state = initialStore, action:Action) => {
  switch (action.type) {
    case ActionTypes.DECREMENT_TICKETS_VIP:
      return {
        ...state,
        vipTickets: state.vipTickets - 1,
      };
    case ActionTypes.INCREMENT_TICKETS_VIP:
      return {
        ...state,
        vipTickets: state.vipTickets + 1,
      };
    default:
      return state;
  }
};

export default standardReducer;
