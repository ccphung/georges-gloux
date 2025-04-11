import { BrowserRouter } from "react-router-dom";
import Hero from "./sections/Hero";
import Songs from "./sections/Songs";

function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Songs />
    </BrowserRouter>
  );
}
export default App;
