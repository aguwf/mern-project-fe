import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import * as Page from './pages'
import React, { Suspense } from 'react'
import { Container } from '@material-ui/core'

const Routes = () => {
  const User = JSON.parse(localStorage.getItem('profile'))
  return (
    <Router>
      <Suspense fallback={<div>Page is loading ...</div>}>
        <Container maxWidth={false}>
          <Switch>
            <Route
              path='/auth'
              exact
              component={!User ? Page.AuthPage : () => <Redirect to={'/'} />}
            />
            <Route path='/' exact component={() => <Redirect to={'posts'} />} />
            <Route path='/posts' exact component={Page.HomePage} />
            <Route path='/posts/search' exact component={Page.HomePage} />
            <Route path='/posts/:id' exact component={Page.PostDetail} />
          </Switch>
        </Container>
      </Suspense>
    </Router>
  )
}

export default Routes
