import React from 'react';
import './App.css';
import Home from './Home.js'
import Header from './Header'
import Footer from './Footer.js'
import Searchpage from './Searchpage'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
      <Route path="/search">
           <Searchpage/>
     </Route>
      <Route path="/">
           <Home/>
      </Route>
     </Switch> 
         <Footer/>
     </Router>
    </div>
  );
}

export default App;
