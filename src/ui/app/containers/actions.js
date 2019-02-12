/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function addUser(user) {
  return {
    type: DISPATCH_ACTIONS.ADD_USER,
    user
  };
};

export function getUser() {
  return {
    type: DISPATCH_ACTIONS.GET_USER,
    user
  };
};

export function getLuckyNumber(username) {
  console.log(username)
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// TODO: Add more actions if needed
