import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
