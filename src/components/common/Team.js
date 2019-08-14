import React, { Component } from 'react';

import img2 from "../assets/img/team/2.jpg";
import img3 from "../assets/img/team/3.jpg";
import TeamMember from './TeamMember';

const teams = [
  {name: 'Kay Garland', title: 'Lead Designer', image: '../assets/img/team/1.jpg'},
  {name: 'Larry Parker', title: 'Lead Marketer', image: img2},
  {name: 'Diana Perterson', title: 'Lead Developer', image: img3},
];

class Team extends Component {

  render() {
    return(
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            {teams.map((team, index) => <TeamMember {...teams} key={index} />)}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;