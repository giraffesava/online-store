import { combineReducers } from 'redux';
import standardReducer from './standardReducer';
import premiumReducer from './premiumReducer';
import vipReducer from './vipReducer';

export const rootReducer = combineReducers({
  standardReducer,
  premiumReducer,
  vipReducer,
});

export type RootState = ReturnType<typeof rootReducer>
