import { ModalStore } from '../types';
import { ModalActions, ModalActionTypes } from './modal.actions';

const initialStore: ModalStore = {
  modalIsOn: false,
};

const ModalReducer = (state = initialStore, action: ModalActions): ModalStore => {
  switch (action.type) {
    case ModalActionTypes.MODAL_IS_OFF:
      return {
        ...state,
        modalIsOn: false,
      };
    case ModalActionTypes.MODAL_IS_ON:
      return {
        ...state,
        modalIsOn: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default ModalReducer;
