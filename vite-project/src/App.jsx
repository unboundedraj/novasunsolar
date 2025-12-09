import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/Navbar";
import Navbar from "./components/Navbar";
import qrCode from "/assets/qrcode.jpg";

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
  // PAYMENT FLAG - Set to true once payment is received
  const PAYMENT_RECEIVED = false;

  // Payment notice component
  if (!PAYMENT_RECEIVED) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-xl p-8 border-l-4 border-red-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Website Temporarily Unavailable</h1>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-medium">
              This website is currently disabled. Everything has a price, especially craftsmanship. We delivered with dedication and commitment — it's your time now.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
              <p className="font-semibold text-yellow-900 mb-3 text-lg">To the site owner:</p>
              <p className="text-yellow-800 mb-4 leading-relaxed">
                Please contact us to settle the outstanding invoice and restore your website immediately.
              </p>
              <p className="text-yellow-900 leading-relaxed">
                <span className="font-semibold">Art isn't cheap, and neither are great websites.</span> Every line of code and every pixel of design takes skill, time, and vision. Good code costs, because it's built to last — but great design pays, because it elevates your brand, brings customers closer, and turns your website into a work of art.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-3">
              <h2 className="font-bold text-gray-900 text-lg mb-3">What went into building this website:</h2>
              
              <div className="space-y-2 text-gray-700">
                <p className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span><strong>Hours of planning and strategy</strong> — understanding your business, your audience, and your goals to create a solution tailored to your needs.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span><strong>Custom design work</strong> — crafting layouts, choosing colors, selecting typography, and creating a visual identity that represents your brand.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span><strong>Professional development</strong> — writing clean, efficient code that ensures your site is fast, secure, and functions flawlessly across all devices.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span><strong>Testing and refinement</strong> — countless iterations to ensure every button works, every page loads correctly, and the user experience is seamless.</span>
                </p>
                
                <p className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span><strong>Years of expertise</strong> — the knowledge and experience accumulated from building dozens of projects, staying current with technology, and mastering our craft.</span>
                </p>
              </div>

              <p className="text-gray-800 mt-4 pt-4 border-t border-gray-200 italic">
                This website represents weeks of dedicated work, professional expertise, and creative problem-solving. Quality work deserves fair compensation.
              </p>
            </div>

            {/* Payment Details Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h2 className="font-bold text-blue-900 text-xl mb-4">Outstanding Payment Details:</h2>
              <div className="space-y-2 text-blue-900">
                <p className="flex justify-between items-center text-lg">
                  <span>Basic Website Development:</span>
                  <span className="font-bold">₹15,000</span>
                </p>
                <p className="flex justify-between items-center text-lg">
                  <span>CMS Setup (Content Management System):</span>
                  <span className="font-bold">₹5,000</span>
                </p>
                <div className="border-t-2 border-blue-300 mt-3 pt-3">
                  <p className="flex justify-between items-center text-xl font-bold">
                    <span>Total Amount Due:</span>
                    <span className="text-2xl text-red-600">₹20,000</span>
                  </p>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 text-center">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Scan to Pay:</h3>
              <div className="flex justify-center mb-4">
                <img 
                  src={qrCode} 
                  alt="Payment QR Code" 
                  className="w-64 h-64 object-contain border-4 border-gray-200 rounded-lg shadow-md"
                />
              </div>
              <p className="text-gray-700 text-sm">
                Scan this QR code with any UPI app to make the payment
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Once payment is processed, your website will be restored within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original app content
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