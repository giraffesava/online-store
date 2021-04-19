import { TicketsStore } from '../types';
import { TicketActionTypes, TicketsActions, TicketType } from './tickets.actions';

const initialStore: TicketsStore = {
  [TicketType.standard]: {
    tickets: 0,
  },
  [TicketType.premium]: {
    tickets: 0,
  },
  [TicketType.vip]: {
    tickets: 0,
  },
};

const ticketsReducer = (state = initialStore, action: TicketsActions): TicketsStore => {
  switch (action.type) {
    case TicketActionTypes.INCREMENT_TICKETS:
      return {
        ...state,
        [action.payload]: {
          tickets: state[action.payload].tickets + 1,
        },
      };
    case TicketActionTypes.DECREMENT_TICKETS:
      return {
        ...state,
        [action.payload]: {
          tickets: state[action.payload].tickets - 1,
        },
      };
    case TicketActionTypes.RESET_TICKETS:
      return {
        ...state,
        [action.payload]: {
          tickets: 0,
        },
      };
    default:
      return state;
  }
};

export default ticketsReducer;
