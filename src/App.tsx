import { EpisodesApp } from "./components/EpisodesApp";
import { Footer } from "./components/Footer";
import "./App.css";

function App(): JSX.Element {
  return (
    <div className="App">
      <EpisodesApp />
      <Footer />
    </div>
  );
}

export default App;
