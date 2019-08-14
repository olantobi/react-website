import React, { Component } from 'react';
import SingleTimeline from './SingleTimeline';

import img1 from "../assets/img/about/1.jpg";
import img2 from "../assets/img/about/2.jpg";
import img3 from "../assets/img/about/3.jpg";
import img4 from "../assets/img/about/4.jpg";

const timelines = [
  {heading: '2009-2011', subheading: 'Our Humble Beginnings', 
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', 
  image: img1, isInvertedTimeline: false },
  {heading: 'March 2011', subheading: 'An Agency is Born', 
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', 
  image: img2, isInvertedTimeline: true },
  {heading: 'December 2012', subheading: 'Transition to Full Service', 
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', 
  image: img3, isInvertedTimeline: false },
  {heading: 'July 2014', subheading: 'Phase Two Expansion', 
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!', 
  image: img4, isInvertedTimeline: true },
];

class Timeline extends Component {

  render() {
    return(
      <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">                  
                  {
                    timelines.map((timeline, index) => <SingleTimeline {...timeline} key={index}/>)
                  }
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>Be Part
                        <br/>Of Our
                        <br/>Story!</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Timeline;