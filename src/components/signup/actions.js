import {
  OPEN_REGISTRATION,
  CLOSE_REGISTRATION
 } from './constants'

export function openRegistration () {
  return {
    type: OPEN_REGISTRATION,
    payload: true
  }
}

export function closeRegistration () {
  return {
    type: CLOSE_REGISTRATION,
    payload: false
  }
}
