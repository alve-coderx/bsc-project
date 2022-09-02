import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BscBody from "./Components/BscBody";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavbarComponent />
      <BscBody />
      <Footer />
    </div>
  );
}

export default App;
