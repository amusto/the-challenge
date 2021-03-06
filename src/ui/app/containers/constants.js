/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  ADD_USER: `${CONTAINER_KEY}/ADD_USER`,
  GET_USER: `${CONTAINER_KEY}/GET_USER`,
  LUCKYNUMBER_RECEIVED: `${CONTAINER_KEY}/LUCKYNUMBER_RECEIVED`,
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`
};
