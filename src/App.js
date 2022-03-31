import React from "react";

import {
  Nosotros,
  Contacto,
  Footer,
  Galeria,
  Header,
  Video,
  Ubicaciones,
  SpecialMenu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Nosotros />
    <SpecialMenu />
    <Video />
    <Ubicaciones />
    <Galeria />
    <Contacto />
    <Footer />
  </div>
);

export default App;
