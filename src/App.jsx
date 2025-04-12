import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import Songs from "./sections/Songs";
import Bio from "./sections/Bio";
import Concert from "./sections/Concert";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Bio />
      <Concert />
      <Songs />
    </BrowserRouter>
  );
}
export default App;
