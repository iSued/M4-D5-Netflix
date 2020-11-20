import React from "react";
import SingleCarousel from "./SingleCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import { Divider } from "@material-ui/core";
import { Carousel } from "bootstrap";

class DynamicGallery extends React.Component {
  state = {
    movieArray: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=1846c79&s=harry+potter"
      );
      let paresdResponse = await response.json();
      let movieArray = paresdResponse.Search;
      this.setState({ movieArray: movieArray });
      console.log(this.state.movieArray);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state.movieArray, "here");
    return (
      <>
        {this.state.movieArray.length > 0 && (
          <OwlCarousel className="owl-theme" loop margin={10} nav>
            {this.state.movieArray.map((movie) => (
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
