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
    query: "marvel",
    loading: true,
  };
  componentDidMount() {
    this.fetchMovies("marvel");
  }
  onSearch = (searchQuery) => {
    this.fetchMovies(searchQuery);
    this.setState({ query: searchQuery });
  };
  fetchMovies = async (query) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=1846c79&s=${query}`
      );
      let paresdResponse = await response.json();
      let movieArray = paresdResponse.Search;
      this.setState({ movieArray: movieArray, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <div className="App">
        <NavBar onSearch={this.onSearch} />

        <Container fluid className="px-5 mt-5">
          <DynamicGallery
            searchQuery={this.state.query}
            movieArray={this.state.movieArray}
          />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="harry potter"
          />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="lord of the rings"
          />
          <FixedGallery
            loadingstate={this.state.loading}
            searchQuery="pokemon"
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
