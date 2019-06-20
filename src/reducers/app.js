import {
  OPEN_NAVIGATION,
  CLOSE_NAVIGATION
} from '../components/menu/constants'

import {
  OPEN_REGISTRATION,
  CLOSE_REGISTRATION
} from '../components/signup/constants'

const appState = {
  navigation: false,
  registration: false
}

const app = (state = appState, action) => {
  switch (action.type) {
    case OPEN_NAVIGATION:
    case CLOSE_NAVIGATION:

      return {
        ...state,
        navigation: action.payload
      }

    case OPEN_REGISTRATION:
    case CLOSE_REGISTRATION:

      return {
        ...state,
        registration: action.payload
      }

    default:
      return state
  }
}

export default app
