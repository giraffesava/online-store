import { ReduxStore } from '../types';
import { TicketType } from './tickets.actions';

export const selectStandardTicketCount = (state: ReduxStore) => state.tickets[TicketType.standard].tickets;

export const selectPremiumTicketCount = (state: ReduxStore) => state.tickets[TicketType.premium].tickets;

export const selectVipTicketCount = (state: ReduxStore) => state.tickets[TicketType.vip].tickets;
