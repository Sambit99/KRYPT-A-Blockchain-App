import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Navbar,
  Footer,
  Welcome,
  Transactions,
  Services,
} from "./components/index";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
