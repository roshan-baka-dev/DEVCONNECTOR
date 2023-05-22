import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

// we can do this because of the thunk-middleware
export const setAlert = (msg, alertType) => (dispatch) => {
  // console.log(dispatch);
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 3000);
  // console.log(dispatch);
};
