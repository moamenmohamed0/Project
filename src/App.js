import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Sale from "./components/Sale/Sale";
import Rent from "./components/Rent/Rent";
import Buy from "./components/Buy/Buy";
import More from "./components/More/More";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Checkout from "./components/Checkout/Checkout";
import HomeServices from "./components/HomeServices/HomeServices";
import Contact from "./components/Contact/Contact"
import Property from "./components/Property/Property"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      {/* <HomeServices/> */}
      <Property />
      {/* <Contact/> */}
      {/* <Slider />
      <Sale />
      <Rent />
      <Buy />
      <Checkout/>
      <More />
      <Partners /> */}
      <Footer />
      <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
