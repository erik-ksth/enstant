import "./App.css";
import 'animate.css';
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Demo from "./pages/Demo";
import FAQ from "./pages/FAQs";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import GetStarted from "./pages/GetStarted";
import StartDemo from './pages/DemoSteps/StartDemo'
import ScrollToTop from "./components/modules/PageLayout/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/demo" element={<Demo/>}/>
            <Route path="/faqs" element={<FAQ/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<ContactUs/>}/>
            <Route path="/startDemo" element={<StartDemo/>}/>
            <Route path="/getStarted" element={<GetStarted/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
