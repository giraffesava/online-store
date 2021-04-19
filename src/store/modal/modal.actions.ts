export enum ModalActionTypes {
  MODAL_IS_ON = 'MODAL_IS_ON',
  MODAL_IS_OFF = 'MODAL_IS_OFF'
}

export const modalIsOn = () => ({
  type: ModalActionTypes.MODAL_IS_ON,
});

export const modalIsOff = () => ({
  type: ModalActionTypes.MODAL_IS_OFF,
});

export type ModalActions = ReturnType<typeof modalIsOn>
    | ReturnType<typeof modalIsOff>
