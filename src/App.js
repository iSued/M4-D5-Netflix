import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import FixedGallery from "./components/FixedGallery";

class App extends React.Component {
  state = {
    movieArray: [],
  };
  componentDidMount() {
    this.fetchMovies("harry potter");
  }
  onSearch = (searchQuery) => {
    this.fetchMovies(searchQuery);
  };
  fetchMovies = async (query) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&s=${query}`
      );
      let paresdResponse = await response.json();
      let movieArray = paresdResponse.Search;
      this.setState({ movieArray: movieArray });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="App">
        <NavBar onSearch={this.onSearch} />
        <Container fluid className="px-5">
          <DynamicGallery movieArray={this.state.movieArray} />
          <FixedGallery searchQuery="harry potter" />
          <FixedGallery searchQuery="lord of the rings" />
          <FixedGallery searchQuery="pokemon" />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
