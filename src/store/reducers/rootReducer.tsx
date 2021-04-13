import { combineReducers } from 'redux';
import ticketsReducer from './ticketsReducer';

export const rootReducer = combineReducers({
  ticketsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
