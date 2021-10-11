import React from 'react'
import Main from './Main'
import Home from './Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/main' component={Main}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
