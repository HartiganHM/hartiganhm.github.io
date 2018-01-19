import React from 'react';
import Routes from '../Routes/Routes';
import { Route } from 'react-router';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Route to="/" component={Routes} />
    </div>
  );
};

export default App;
