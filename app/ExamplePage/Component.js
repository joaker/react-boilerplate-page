/*
 * ExamplePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

/*
 * parent imports - modules registered by the containing application
 */
import H1 from 'components/H1';


/*
 * local imports - local references
 */
import messages from './messages';
import {
  DOMAIN as domain,
} from './constants';
import reducer from './reducer';
import saga from './saga';


export class ExamplePage extends React.Component {
  
  componentWillMount() {
    this.props.loadMessage();
  }

  render() {
    const message = this.props.message;
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Example page to register with a react-boilerplate application"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <p>
          {message}
        </p>
        <p>
          <button onClick={this.props.setHashUser}>Click me to use the hash route as user</button>
        </p>
        <p>
          User: '{this.props.username}'
        </p>
      </div>
    );
  }
}

ExamplePage.propTypes = {
  loadMessage: PropTypes.func,
  
}

export default ExamplePage;
