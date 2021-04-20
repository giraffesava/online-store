import { ReduxTicketStore } from '../types';
import { TicketType } from './tickets.actions';

export const selectStandardTicketCount = (state: ReduxTicketStore) => state.tickets[TicketType.standard];

export const selectPremiumTicketCount = (state: ReduxTicketStore) => state.tickets[TicketType.premium];

export const selectVipTicketCount = (state: ReduxTicketStore) => state.tickets[TicketType.vip];
