import React from "react";
import logo from "./logo.svg";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";

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

        <DynamicGallery movieArray={this.state.movieArray} />
      </div>
    );
  }
}

export default App;
