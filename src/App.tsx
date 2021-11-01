import episodes from "./episodes.json";
import { EpisodeGallery } from "./components/EpisodeGallery";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

console.log(`Imported ${episodes.length} episode(s)`);
console.log(`First episode's name is ${episodes[0].name}`);

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
