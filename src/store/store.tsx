import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const storeInit = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__
    && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default storeInit;
