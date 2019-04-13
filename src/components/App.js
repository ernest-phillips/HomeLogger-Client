import React, { Component } from 'react';
import '../App.css';
import About from './About'
import Header from './Header'
import Footer from './Footer'
import SignIn from './SignIn'
import NavBar from './NavBar'
import FullStory from './FullStory'
import Register from './Register'
import {
  BrowserRouter as Router, 
  Route,
  Switch
  
} from 'react-router-dom'

function App () {    
      return (
        <Router>
          <div className="Site" >
            <NavBar />
              <Header />
              <main className="Site-content">
                <div className="inner-content">
                  <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/sign-in" component={SignIn}/>
                    <Route path="/story" component={FullStory}/>
                    <Route path="/register" component={Register}/>
                  </Switch>                  
                </div>        
              </main>
              <Footer />
          </div>
        </Router>
    );
    
    
  
}

export default App;
