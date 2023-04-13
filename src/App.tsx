import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Ratings from "./components/Ratings";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "animate.css";

function App() {
   return (
      <div className="App">
         <NavBar />
         <Banner />
         <Ratings />
         <Projects />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
