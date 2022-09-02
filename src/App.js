import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BscBody from "./Components/BscBody";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";
import { ThemeContext } from "./Context/theme";

function App() {
  const [{theme}] = useContext(ThemeContext)
  return (
    <div style={{overflowX:"hidden",backgroundColor : theme.backgroundColor}}>
      <NavbarComponent />
      <BscBody/>
      <Footer />
    </div>
  );
}

export default App;
