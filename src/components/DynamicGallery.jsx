import { Carousel } from "react-bootstrap";
import React from "react";
import SingleCarousel from "./SingleCarousel";

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
    if (this.state.movieArray !== null) {
      return (
        <>
          <Carousel className="mb-5">
            {this.state.movieArray.map((movie, index) => (
              <SingleCarousel singlemovie={movie} key={index} />
            ))}
          </Carousel>
        </>
      );
    }
  }
}

export default DynamicGallery;
