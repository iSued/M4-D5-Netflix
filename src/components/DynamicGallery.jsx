import React from "react";
import SingleCarousel from "./SingleCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Divider } from "@material-ui/core";
import { Carousel } from "bootstrap";

class DynamicGallery extends React.Component {
  render() {
    return (
      <>
        {this.props.movieArray.length > 0 && (
          <OwlCarousel margin={10}>
            {this.props.movieArray.map((movie) => (
              <div className="item">
                <img src={movie.Poster} alt="" />
              </div>
            ))}
          </OwlCarousel>
        )}
      </>
    );
  }
}

export default DynamicGallery;
