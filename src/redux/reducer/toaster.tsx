import {ERROR} from '../action/types';

const initialState = {type: '', flag: false, message: ''};

export default function toggleError(state = initialState, action) {
  const {payload, type} = action;

  switch (type) {
    case ERROR:
      return payload;
    default:
      return state;
  }
}
