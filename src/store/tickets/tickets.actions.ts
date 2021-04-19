export enum TicketActionTypes {
    INCREMENT_TICKETS = 'INCREMENT_TICKETS',
    DECREMENT_TICKETS = 'DECREMENT_TICKETS',
    RESET_TICKETS = 'RESET_TICKETS',
}

export enum TicketType {
    standard = 'standard',
    premium = 'premium',
    vip = 'vip'
}

export const incrementTickets = (ticketType: TicketType) => ({
  type: TicketActionTypes.INCREMENT_TICKETS,
  payload: ticketType,
});

export const decrementTickets = (ticketType: TicketType) => ({
  type: TicketActionTypes.DECREMENT_TICKETS,
  payload: ticketType,
});

export const resetTickets = (ticketType: TicketType) => ({
  type: TicketActionTypes.RESET_TICKETS,
  payload: ticketType,
});

export type TicketsActions = ReturnType<typeof incrementTickets>
    | ReturnType<typeof decrementTickets>
    | ReturnType<typeof resetTickets>
