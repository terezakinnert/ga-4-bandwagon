import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bulma';
import './scss/style.scss';

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
import FindMusicians from './components/users/compatible/FindMusicians';
import FindBands from './components/bands/compatible/FindBands';

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
              <Route exact path='/findbands' component={FindBands} />
              <Route exact path='/findmusicians' component={FindMusicians} />
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

// <Route path='/profile' component={Profile} />
