import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container fluid className="d-flex flex-column justify-content-center">
        <DynamicGallery searchQuery="harry" />
        <DynamicGallery searchQuery="lord of the rings" />
        <DynamicGallery searchQuery="pokemon" />
      </Container>
    </div>
  );
}

export default App;
