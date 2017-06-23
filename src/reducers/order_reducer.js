import { ORDER_STATUSES } from '../actions/types';

const initialState = {
  all: [],
  statuses: {},
  order: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ORDER_STATUSES:
      return { ...state, statuses: action.payload };
    default:
      return { ...state };
  }
}
