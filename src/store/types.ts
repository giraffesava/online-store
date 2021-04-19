import { TicketType } from './tickets/tickets.actions';

export interface ReduxStore {
    tickets: TicketsStore
}

export interface TicketsStore {
    [TicketType.standard]: {
        tickets: number,
    },
    [TicketType.premium]: {
        tickets: number,
    },
    [TicketType.vip]: {
        tickets: number,
    }
}
