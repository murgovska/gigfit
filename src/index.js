import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
// import routes from './routes'
import App from './App'
import './index.scss'
import configureStore from './reducers/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
   </Provider>
  , document.getElementById('root')
)
serviceWorker.register()
