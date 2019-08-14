import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/common/Services";
import Contact from "./components/pages/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>           
            <Route path="/" component={Home} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
        </PageWrapper>
      </Router>  
    );
  }
}

export default App;
