import { LOAD_MESSAGE, SET_MESSAGE } from './constants';

/**
 * Load the message for the example page
 *
 * @return {object} An action object with a type of LOAD_MESSAGE
 */
export function loadMessage() {
  return {
    type: LOAD_MESSAGE,
  };
}

/**
 * Sets the message for the example page
 * @param {*} message to set
 * @return {object} An action object with a type of SET_MESSAGE
 */
export function setMessage(message) {
  return {
    type: SET_MESSAGE,
    message,
  };
}
