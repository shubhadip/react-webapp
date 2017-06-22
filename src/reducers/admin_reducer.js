import { FETCH_ADMIN_USERS, UPDATE_ADMIN_USERS_STATUS, HIGHLIGHT_ADMIN_USERS_STATUS, GET_BARCODE_DETAILS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ADMIN_USERS:
      return { ...state, all: action.payload };
    case UPDATE_ADMIN_USERS_STATUS:
      return { ...state, all: state.all.filter(item => action.payload.id !== item.id) };
    case HIGHLIGHT_ADMIN_USERS_STATUS:
      return { ...state,
        all: state.all.map(item =>
          (action.payload.id === item.id) ? { ...item, enable: action.payload.enable } : item),
      };
    case GET_BARCODE_DETAILS:
      return { ...state, barcode: Object.assign({}, action.payload) };
    default:
      return { ...state };
  }
}
