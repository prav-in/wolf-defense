import React from "react";
import GlobalStyle from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
