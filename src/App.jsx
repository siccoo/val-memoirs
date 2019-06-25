import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

export default App;
