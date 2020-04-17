import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Game from 'screens/Game';
import Home from 'screens/Home';
import NotFound from 'screens/NotFound';
import { GlobalContextProvider } from 'contexts/GlobalContext';
import * as ROUTES from 'config/routes';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <GlobalContextProvider>
        <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route exact path={ROUTES.GAME} component={Game} />
              <Route exact path={ROUTES.NOT_FOUND} component={NotFound} />
              <Route path={ROUTES.HOME} component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    );
  }
}

export default App;
