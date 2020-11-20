import React from "react";
import { Carousel } from "react-bootstrap";

class SingleCarousel extends React.Component {
  render() {
    return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={this.props.singlemovie.Poster}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.singlemovie.Title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
}

export default SingleCarousel;
