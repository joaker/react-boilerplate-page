/*
 * Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import { SET_MESSAGE } from './constants';

// The initial state of the App
export const initialState = fromJS({
  message: '',
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return state.set('message', action.message);
    default:
      return state;
  }
}

export default reducer;
