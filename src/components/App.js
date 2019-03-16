import React, { Component } from 'react';
import '../App.css';
import About from './About'
import Header from './Header'
import Footer from './Footer'
import SignIn from './SignIn'
import NavBar from './NavBar'

class App extends Component {
  render() {
    return (
      <div className="Site" >
        <NavBar />
          <Header />
          <main className="Site-content">
            <div className="inner-content">
              
              <About />
              {/* <SignIn /> */}
            </div>        
          </main>
          <Footer />
      </div>
      
    );
  }
}

export default App;
