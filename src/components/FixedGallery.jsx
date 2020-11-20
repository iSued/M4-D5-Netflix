import React from "react";
import SingleCarousel from "./SingleCarousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import "./DynamicGallery.css";
class FixedGallery extends React.Component {
  state = {
    movieArray: [],
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&s=${this.props.searchQuery}`
      );
      let paresdResponse = await response.json();
      let movieArray1 = paresdResponse.Search;
      response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&s=${this.props.searchQuery}&page=2`
      );
      paresdResponse = await response.json();
      let movieArray2 = paresdResponse.Search;
      let totalArray = movieArray1.concat(movieArray2);
      this.setState({ movieArray: totalArray });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <h2 className="align-self-start">
          Search for: {this.props.searchQuery}
        </h2>

        {this.state.movieArray.length > 0 && (
          <OwlCarousel margin={10} mouseDrag={true}>
            {this.state.movieArray.map((movie) => (
              <div className="item" style={{ width: "160px" }}>
                <img src={movie.Poster} alt="" />
                <div></div>
              </div>
            ))}
          </OwlCarousel>
        )}
      </>
    );
  }
}

export default FixedGallery;
