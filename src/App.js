import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home'
import Services from './Components/Pages/Services'
import Products from './Components/Pages/Products'
import SignUp from './Components/Pages/SignUp'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sign-up" exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
