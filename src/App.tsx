import { EpisodeGallery } from "./components/EpisodeGallery";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SearchBar } from "./components/SearchBar";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <SearchBar />
      <EpisodeGallery />
      <Footer />
    </div>
  );
}

export default App;
