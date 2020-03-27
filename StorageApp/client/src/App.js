import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavHeader from './components/NavBars/NavHeader';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import LandingPage from './components/LandingPage/LandingPage';
import CreateRequestPage from './components/Requests/CreateRequestPage';
import CountRequests from './components/RequestsAll/CountRequests';
import ShopContextProvider from './contexts/shopsContext/shopsContext';
import RequestContextProvider from './contexts/requestContext/requestContext';
import './styles/App.css';

function App() {

  return (
      <Router>
          <NavHeader />
            <Route exact path='/' component={LandingPage} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <RequestContextProvider>
              <ShopContextProvider>
                <Route path='/newRequest' component={CreateRequestPage} />
                <Route path='/requestsAll' component={CountRequests} />
              </ShopContextProvider>
            </RequestContextProvider>
      </Router>
  );
}

export default App;
