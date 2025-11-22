import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Navbar";
import Navbar from "./components/Navbar";

// Importing pages
import Home from "./pages/Home";
import About from "./pages/About";
import WhySolar from "./pages/WhySolar";
import NovasunSolar from "./pages/NovasunSolar";
import OurWorkflow from "./pages/OurWorkFlow";
import SolarModule from "./pages/SolarModule";
import FinancialAssistance from "./pages/FinancialAssistance";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-solar" element={<WhySolar />} />

            {/* Company Subroutes */}
            <Route path="/company/novasun-solar" element={<NovasunSolar />} />
            <Route path="/company/our-workflow" element={<OurWorkflow />} />
            <Route path="/company/solar-module" element={<SolarModule />} />

            <Route path="/financial-assistance" element={<FinancialAssistance />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
