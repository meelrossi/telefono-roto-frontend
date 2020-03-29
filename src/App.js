import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Game from './screens/Game'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/game'>
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
