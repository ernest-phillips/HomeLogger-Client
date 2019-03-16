import React, { Component } from 'react';
import '../App.css';
import About from './About'
import Header from './Header'
import Footer from './Footer'
import SignIn from './SignIn'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <main>
            <div className="inner-content">
              
              <About />

            </div>        
          </main>
          <Footer />
      </div>
      
    );
  }
}

export default App;
