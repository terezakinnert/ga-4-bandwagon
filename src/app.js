import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Index from './components/bands/Index';
import New from './components/bands/New';
import Edit from './components/bands/Edit';
import Show from './components/bands/Show';
import UserIndex from './components/users/Index';
import UserShow from './components/users/Show';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/bands' component={Index} />
              <Route exact path='/bands/new' component={New} />
              <Route path='/bands/:id/edit' component={Edit} />
              <Route path='/bands/:id' component={Show} />
              <Route exact path='/users' component={UserIndex} />
              <Route path='/users/:id' component={UserShow} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
