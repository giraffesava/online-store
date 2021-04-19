import { TicketType } from './tickets/tickets.actions';

export interface ReduxTicketStore {
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

export interface ReduxModalStore {
    modal: ModalStore
}

export interface ModalStore {
    modalIsOn: boolean
}
