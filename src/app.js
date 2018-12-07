import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>header goes here</h1>
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
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
