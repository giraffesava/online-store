import ActionTypes from '../actionTypes';

export const decrementTicketsStandard = () => ({
  type: ActionTypes.DECREMENT_TICKETS_STANDARD,
});
export const decrementTicketsPremium = () => ({
  type: ActionTypes.DECREMENT_TICKETS_PREMIUM,
});
export const decrementTicketsVip = () => ({
  type: ActionTypes.DECREMENT_TICKETS_VIP,
});
export const incrementTicketsStandard = () => ({
  type: ActionTypes.INCREMENT_TICKETS_STANDARD,
});
export const incrementTicketsPremium = () => ({
  type: ActionTypes.INCREMENT_TICKETS_PREMIUM,
});
export const incrementTicketsVip = () => ({
  type: ActionTypes.INCREMENT_TICKETS_VIP,
});
