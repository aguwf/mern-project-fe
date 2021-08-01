import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Page from './pages'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Page.HomePage} />
        <Route />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
