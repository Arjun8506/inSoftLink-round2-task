import Aos from "aos";
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";
import Home from "./page/Home";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <div className="w-full font-openSans">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
