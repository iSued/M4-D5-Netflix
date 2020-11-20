import React from "react";
import SingleCarousel from "./SingleCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Divider } from "@material-ui/core";
import { Spinner } from "react-bootstrap";

class DynamicGallery extends React.Component {
  render() {
    if (this.props.movieArray) {
      if (this.props.loading === true) {
        return (
          <div>
            <h3>Loading...</h3>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        );
      } else {
        return (
          <>
            <h2 className="align-self-start">
              First {this.props.movieArray.length} results for:{" "}
              {this.props.searchQuery}
            </h2>
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
    } else {
      return <h1 className="mb-5">No search results found :(</h1>;
    }
  }
}

export default DynamicGallery;
