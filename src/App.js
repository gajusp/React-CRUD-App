import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import { Home } from './components/Home';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className='App'>
      <h1>Welcome to React CRUD App</h1>
      <br />

      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={AddUser} />
            <Route path='/edit/:id' component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
