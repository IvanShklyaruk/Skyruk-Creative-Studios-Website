import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/MagicMatchStyles/MagicMatchPage.css";

const MagicMatchPage = () => {
  return (
    <div className="magic-match-page">
      <Navbar />
      <Footer />
    </div>
  );
};

export default MagicMatchPage;
