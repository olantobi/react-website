import React, { Component } from 'react';
import Header from "../common/Header";
import Services from "../common/Services";
import image from "../assets/img/header-bg.jpg";
import Portfolio from '../common/Portfolio';
import Timeline from '../common/Timeline';
import Team from '../common/Team';

class Home extends Component {
  
  render() {
    return (
      <div>
        <Header title="Welcome To Our Studio!" subtitle="IT'S NICE TO MEET YOU" buttonText="TELL ME MORE" 
        link="/services" showButton={true} image={image}/>

        <Services />
        <Portfolio />
        <Timeline />
        <Team />
      </div>
    );
  }
}

export default Home;