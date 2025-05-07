import Aos from "aos";
import React, { useEffect } from "react";
import Navbar from "./container/Navbar";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full font-openSans">
      <Navbar />
    </div>
  );
};

export default App;
