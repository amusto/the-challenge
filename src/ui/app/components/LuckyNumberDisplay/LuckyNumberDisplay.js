/**
 * LuckyNumberDisplay.js
 *
 * This component displays the user's full name and their lucky number!
 * Its props are passed down from the LuckyNumber container.
 */

import React from 'react';
import PropTypes from 'prop-types';

var styleDisplay = {
  textAlign: 'center',
  fontFamily: 'arial'
}

class LuckyNumberDisplay extends React.PureComponent {
  renderContent() {
    const { user } = this.props;
    return (
      <div style={styleDisplay}>
        <div>Hello, {user.first_name} {user.last_name}!</div>
        <div>Your lucky number is {user.luckyNumber}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="mt5 pa4 center w-25 bg-light-gray">
        {this.renderContent()}
      </div>
    );
  }
}

LuckyNumberDisplay.propTypes = {
  user: PropTypes.shape({
    first_name: PropTypes.any,
    last_name: PropTypes.any,
    user_name: PropTypes.any
  }).isRequired
};

export default LuckyNumberDisplay;
