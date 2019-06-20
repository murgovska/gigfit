import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
 } from './constants'

export function openNavigation () {
  document.body.classList.add('noScroll')

  return {
    type: OPEN_NAVIGATION,
    payload: true
  }
}

export function closeNavigation () {
  document.body.classList.remove('noScroll')

  return {
    type: CLOSE_NAVIGATION,
    payload: false
  }
}
