import React, { Component } from "react";
import Slider from "react-slick";
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 class SimpleSlider extends Component {
  render() {
    
    return (
      <div>
       
        <Slider>
          <div>
          
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


export default SimpleSlider;