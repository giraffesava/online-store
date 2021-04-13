import ActionTypes from '../actionTypes';

interface CounterState {
  standardTickets: number
  premiumTickets: number
  vipTickets: number
}

interface Action {
  type: string
}

const initialStore: CounterState = {
  standardTickets: 0,
  premiumTickets: 0,
  vipTickets: 0,
};

const ticketsReducer = (state = initialStore, action:Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_TICKETS_STANDARD:
      return {
        ...state,
        standardTickets: state.standardTickets + 1,
      };
    case ActionTypes.INCREMENT_TICKETS_PREMIUM:
      return {
        ...state,
        premiumTickets: state.premiumTickets + 1,
      };
    case ActionTypes.INCREMENT_TICKETS_VIP:
      return {
        ...state,
        vipTickets: state.vipTickets + 1,
      };
    case ActionTypes.DECREMENT_TICKETS_STANDARD:
      return {
        ...state,
        standardTickets: state.standardTickets - 1,
      };
    case ActionTypes.DECREMENT_TICKETS_PREMIUM:
      return {
        ...state,
        premiumTickets: state.premiumTickets - 1,
      };
    case ActionTypes.DECREMENT_TICKETS_VIP:
      return {
        ...state,
        vipTickets: state.vipTickets - 1,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
