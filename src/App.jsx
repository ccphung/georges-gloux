import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import Songs from "./sections/Songs";
import Bio from "./sections/Bio";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Bio />
      <Songs />
    </BrowserRouter>
  );
}
export default App;
