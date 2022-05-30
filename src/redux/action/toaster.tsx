import {ERROR} from './types';

export const toggleError = data => dispatch => {
  dispatch({
    type: ERROR,
    payload: data,
  });
  let objTwo = {
    type: '',
    message: '',
    flag: false,
  };
  setTimeout(
    () =>
      dispatch({
        type: ERROR,
        payload: objTwo,
      }),
    3000,
  );
};
