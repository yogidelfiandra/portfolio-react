import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import LandingPage from './pages/LandingPage';
import NotFound from './pages/NotFound';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className='App'>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
