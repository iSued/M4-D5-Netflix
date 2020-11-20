
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";
import NavBar from "./components/NavBar";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <NavBar />
        <DynamicGallery />
    </div>
  );

export default App;
