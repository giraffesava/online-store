import { TicketsStore } from '../types';
import { TicketActionTypes, TicketsActions, TicketType } from './tickets.actions';

const initialStore: TicketsStore = {
  [TicketType.standard]: {
    tickets: 0,
    ticketType: TicketType.standard,
    url: 'https://puzzlepalace.com.au/wp-content/uploads/2019/06/New-York-1500-Piece-Jigsaw-Puzzle-Clementoni-1.jpg',
    description: 'You will visit: New York, Washington, Los Angeles.',
    price: 250,
  },
  [TicketType.premium]: {
    tickets: 0,
    ticketType: TicketType.premium,
    url: 'https://woman.forumdaily.com/wp-content/uploads/2020/11/shutterstock_386306728.jpg',
    description: 'You will visit: New York, Brooklyn, Los Angeles, Chicago.',
    price: 450,
  },
  [TicketType.vip]: {
    tickets: 0,
    ticketType: TicketType.vip,
    url: 'https://www.tourprom.ru/site_media/images/upload/2016/8/25/poiphoto/statuya-svobody.jpg',
    description: 'You can choose 5 places where you want to go.',
    price: 850,
  },
};

const ticketsReducer = (state = initialStore, action: TicketsActions): TicketsStore => {
  switch (action.type) {
    case TicketActionTypes.INCREMENT_TICKETS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          tickets: state[action.payload].tickets + 1,
        },
      };
    case TicketActionTypes.DECREMENT_TICKETS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          tickets: state[action.payload].tickets - 1,
        },
      };
    case TicketActionTypes.RESET_TICKETS:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          tickets: 0,
        },
      };
    default:
      return state;
  }
};

export default ticketsReducer;
