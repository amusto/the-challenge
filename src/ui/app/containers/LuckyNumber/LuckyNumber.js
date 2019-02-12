/**
 * LuckyNumber.js
 *
 * This container controls the props used to render the lucky number.
 * It fetches props from the Redux store.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';

import LuckyNumberDisplay from 'components/LuckyNumberDisplay/LuckyNumberDisplay';

import { CONTAINER_KEY } from '../constants';

class LuckyNumber extends React.PureComponent {
  render() {
    const {status} = this.props;
    if (status !== 'completed') {
       return <Redirect to='/' />;
     }

    return (
      <article>
        <Helmet>
          <title>Lucky Number</title>
        </Helmet>

        <LuckyNumberDisplay {...this.props} />
      </article>
    );
  }
}

const mapStateToProps = function(state) {
  let thisUser = {};
  let thisStatus = {};

  state._root.entries.forEach(function(data) {
    if (data[0] === CONTAINER_KEY) {
      let entries = data[1]._root.entries;

      let getUser = entries.findIndex(item => item[0] === 'user')
      thisUser.first_name = entries[getUser][1].firstname
      thisUser.last_name = entries[getUser][1].lastname
      thisUser.user_name = entries[getUser][1].username

      entries.forEach(function(entry) {
        if(entry['luckyNumber']) {
          thisUser.luckyNumber = entry['luckyNumber']
        }
        if(entry['status']) {
          thisStatus = entry['status']
        }
      })

    }
  })
  return {
    status: thisStatus,
    user: thisUser
  }
};
// const mapStateToProps = (state) => (
//
//   return {
//       user: state.user
//   }
// );

export default connect(mapStateToProps)(LuckyNumber);
