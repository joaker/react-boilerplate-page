/* eslint-disable prettier/prettier */

import * as constants from './ExamplePage/constants';
import selectors from './ExamplePage/selectors';
import * as actions from './ExamplePage/actions';
import saga from './ExamplePage/saga';
import reducer from './ExamplePage/reducer';
import Container from './ExamplePage';

export {
  constants,
  Container,
  reducer,
  actions,
  saga,
  selectors,
};

export default Container;
