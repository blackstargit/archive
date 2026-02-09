import React from "react";
import "./App.css";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import TopNavbar from "./Components/TopNavbar/TopNavbar";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="wrapper collapse" id="wrapper">
      {/* Sidebar */}
      <Sidebar />

      {/* Top Navbar */}
      <TopNavbar />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* What we do */}
      <Services />

      {/* Recent Projects Section */}
      <Projects />

      {/* Contact us */}
      <ContactUs />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
