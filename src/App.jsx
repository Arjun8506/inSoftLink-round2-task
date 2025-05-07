import Aos from "aos";
import React, { useEffect } from "react";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";
import Home from "./page/Home";

const App = () => {
  useEffect(() => {
    Aos.init();
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
