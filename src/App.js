import React from 'react'
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import Nav from './components/Nav';
import Test from './components/Test';
import ProfileForm from './components/ContactComponent';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initalState = {
  count: 0
}

const reducer = (state = initalState, action) => {
  switch(action.type) {
    case 'INCREASE':
      return {
        count: state.count +1
      }
    case 'DECREASE':
      return {
        count: state.count -1
      }
    default:
      return state
  }

}

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/contact">
            <ProfileForm />
          </Route>
          <Route path="/test">
            <Test />
          </Route>

        </Switch>

      </header>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
