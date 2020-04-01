import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Game from 'screens/Game';
import Home from 'screens/Home';
import { GlobalContextProvider } from 'contexts/GlobalContext'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <GlobalContextProvider>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path='/game/:id' component={Game} />
              <Route path='/' component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    );
  }
}

export default App;
