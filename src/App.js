import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <div className="sectionsWrapper">
            <Search city="Munich" temperature={15} />
            <Forecast />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
