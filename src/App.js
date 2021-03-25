import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import JobPage from './Pages/JobPage.js';

import './App.css';
import StoreProvider from './utils/store';

import {
  Route, BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <StoreProvider>
      <div>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile"></Route>
          <Route exact path="/jobs">
            <JobPage />
          </Route>
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
