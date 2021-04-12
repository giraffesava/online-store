import ActionTypes from '../actionTypes';

interface CounterState {
  ticketsCounter: number
}

interface Action {
  type: string
}

const initialStore: CounterState = {
  ticketsCounter: 0,
};

const ticketsReducer = (state = initialStore, action:Action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        ticketsCounter: state.ticketsCounter + 1,
      };
    case ActionTypes.DECREMENT_COUNTER:
      return {
        ...state,
        ticketsCounter: state.ticketsCounter - 1,
      };
    default:
      return state;
  }
};

export default ticketsReducer;
