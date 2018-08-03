/*
 * ExamplePage
 *
 * Global imports - external dependencies
 */
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

/*
 * parent imports - modules registered by the containing application
 */
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import homeReducer from 'containers/HomePage/reducer';
import homeSaga from 'containers/HomePage/saga';
import { changeUsername } from 'containers/HomePage/actions';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/*
 * local imports - local references
 */
import { DOMAIN as domain } from './constants';
import { loadMessage } from './actions';
import makeSelectMessage from './selectors';
import reducer from './reducer';
import saga from './saga';
import ExamplePage from './Component';

const mapState = createStructuredSelector({
  message: makeSelectMessage(),
  username: makeSelectUsername(),
});

const getHashUser = (defaultUser = 'joaker') => {
  const hashName = window.location.hash.slice(1) || defaultUser;
  return hashName;
};

export function mapDispatch(dispatch) {
  const name = getHashUser();
  return {
    loadMessage: () => dispatch(loadMessage()),
    setHashUser: () => dispatch(changeUsername(name)),
  };
}

const withConnect = connect(
  mapState,
  mapDispatch,
);

const withHomeReducer = injectReducer({ key: 'home', reducer: homeReducer });
const withHomeSaga = injectSaga({ key: 'home', saga: homeSaga });

const withReducer = injectReducer({ key: domain, reducer });
const withSaga = injectSaga({ key: domain, saga });

export default compose(
  withHomeReducer,
  withHomeSaga,
  withReducer,
  withSaga,
  withConnect,
)(ExamplePage);
