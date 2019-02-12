/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  user: {},
  status: 'incomplete'
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.ADD_USER: {
      let user = action.payload
      state._root.entries.forEach(function(data) {
        if (data[0] === 'user') {
          data[1] = user;
        }
      })
      return Object.assign({}, state, {})
    }
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER: {
      let user = action.payload
      state._root.entries.forEach(function(data) {
        if (data[0] === 'user') {
          data[1] = user;
        }
      })
      return Object.assign({}, state, {})
    }
    case DISPATCH_ACTIONS.LUCKYNUMBER_RECEIVED: {
      let luckyNumber = action.payload.luckyNumber;

      let entries = state._root.entries;
      let getLuckyNumber = entries.findIndex(item => item[0] === 'luckyNumber')
      entries[getLuckyNumber] = {luckyNumber};

      let getStatus = entries.findIndex(item => item[0] === 'status')
      entries[getStatus] = {status: 'completed'};

      return Object.assign({}, state, {
        status: entries[getStatus]
      })
    }
    case DISPATCH_ACTIONS.GET_USER: {
      return state
    }
    default: {
      return state;
    }
  }
}

export default reducer;
