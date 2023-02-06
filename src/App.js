import Hero from "./components/Hero";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./assets/data/data";
import Sales from "./components/Sales";
import FlexContent from "./components/FlexContent";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Cart/>
      <div className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} isExists={true} />
        <FlexContent endpoint={highlight} isExists={true} />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </div>
      <Footer footerAPI={footerAPI} />
    </>
  );
}

export default App;
