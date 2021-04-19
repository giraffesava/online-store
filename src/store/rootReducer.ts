import { combineReducers } from 'redux';
import ticketsReducer from './tickets/tickets.reducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

export default rootReducer;
