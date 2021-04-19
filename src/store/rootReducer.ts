import { combineReducers } from 'redux';
import ticketsReducer from './tickets/tickets.reducer';
import ModalReducer from './modal/modal.reducer';

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  modal: ModalReducer,
});

export default rootReducer;
