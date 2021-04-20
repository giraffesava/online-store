import { TicketType } from './tickets/tickets.actions';

export interface ReduxTicketStore {
    tickets: TicketsStore
}

export interface Ticket {
    tickets: number,
    url: string,
    ticketType: TicketType,
    price: number,
    description: string
}

export interface TicketsStore {
    [TicketType.standard]: Ticket
    [TicketType.premium]: Ticket
    [TicketType.vip]: Ticket
}

export interface ReduxModalStore {
    modal: ModalStore
}

export interface ModalStore {
    modalIsOn: boolean
}
