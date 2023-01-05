import "./App.css";
import Countries from "./Components/Countries";
import Footer from "./Components/Footer";
import Improve from "./Components/Improve";
import Introduction from "./Components/Introduction";
import Join from "./Components/Join";
import Navigation from "./Components/Navigation";
import Sponsors from "./Components/Sponsors";
import Tables from "./Components/Tables";
import Third from "./Components/Third";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Tables />
      <Sponsors />
      <Third />
      <Improve />
      <Countries />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
