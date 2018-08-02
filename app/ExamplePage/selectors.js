/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { DOMAIN as domain } from './constants';

const selectDomain = state => state.get(domain, initialState);

const makeSelectMessage = () =>
  createSelector(selectDomain, state => state.get('message'));

export {
  selectDomain,
  makeSelectMessage,
};

export default makeSelectMessage;
