import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Page from './pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/auth' component={Page.AuthPage} />
        <Route path='/' component={Page.HomePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
