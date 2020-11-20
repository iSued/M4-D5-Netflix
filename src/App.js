import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicGallery from "./components/DynamicGallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DynamicGallery />
      </header>
    </div>
  );
}

export default App;
