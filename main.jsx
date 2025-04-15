import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App';
import './index.css';

import NotFound from './components/Pageerror';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Support from './components/Support';
import TAC from './components/TAC';
import Transport from './components/Transport';
import Tajmahal from './components/Tajmahal';
import ExplorePackages from './components/Explore';
import PaymentOptions from './components/Payment';
import ReservationPolicy from './components/Regervation';
import Testimonials from './components/testimonials';
import HimachalPradeshTours from './components/HimachalPradeshTours';
import RajasthanTourPackages from './components/RajasthanTourPackages';
import AgraTourPackages from './components/AgraTourPackages';
import DelhiTourPackages from './components/DelhiTourPackages';
import GoldenTriangleTours from './components/GoldenTriangleTours';
import AboutRajasthan from './components/rajasthan';
import AboutKerala from './components/kerala';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/TAC" element={<TAC />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/tajmahal" element={<Tajmahal />} />
        <Route path="/packages" element={<ExplorePackages />} />
        <Route path="/Payment" element={<PaymentOptions />} />
        <Route path="/ReservationPolicy" element={<ReservationPolicy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/HimachalPradeshTours" element={<HimachalPradeshTours />} />
        <Route path="/RajasthanTourPackages" element={<RajasthanTourPackages />} />
        <Route path="/AgraTourPackages" element={<AgraTourPackages />} />
        <Route path="/DelhiTourPackages" element={<DelhiTourPackages />} />
        <Route path="/GoldenTriangleTours" element={<GoldenTriangleTours />} />
        <Route path="/rajasthan" element={<AboutRajasthan />} />
        <Route path="/kerala" element={<AboutKerala />} />



        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
