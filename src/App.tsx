import Benefits from "./components/Benefits/Benefits";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Media from "./components/Media/Media";
import Promises from "./components/Promises/Promises";
import Quote from "./components/Quote/Quote";
import Reviews from "./components/Reviews/Reviews";
import Sales from "./components/Sales/Sales";

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <Benefits />
      <Quote />
      <Media />
      <Promises />
      <Reviews />
      <Sales />
      <Footer />
    </div>
  );
}

export default App;
