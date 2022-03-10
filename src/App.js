import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './homePage';
import Slider from './sliderPage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/slider'>
          <Slider />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
