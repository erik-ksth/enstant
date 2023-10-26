import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Demo from "./pages/Demo"
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/demo" element={<Demo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
