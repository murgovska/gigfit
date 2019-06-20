import React from 'react'
import { Route } from 'react-router'

import App from './App'
import Products from './components/products/Products'

const routes = (
  <Route path="/" component={App}>
    <Route path="products" component={Products} />
    {/* <Route path="users" component={Users}>
      <Route path="/user/:userId" component={User} />
    </Route> */}
    {/* <Route path="*" component={NoMatch} /> */}
  </Route>
)

export default routes