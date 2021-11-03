import { EpisodeGallery } from "./components/EpisodeGallery";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./App.css";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <EpisodeGallery />
      <Footer />
    </div>
  );
}

export default App;
