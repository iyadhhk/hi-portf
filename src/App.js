import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';
import About from './pages/About/About';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App(props) {
  console.log(props);
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/work' component={Work} />
        <Route exact path='/contact-me' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
