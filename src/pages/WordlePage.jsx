import { useEffect, useState } from "react";
import WordleInterface from "../components/WordleComponents/WordleInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/WordleStyles/WordlePage.css";

const WordlePage = () => {
  const [solution, setSolution] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="wordle-page">
      <Navbar />
      <h1>Wordle</h1>
      {solution && <WordleInterface solution={solution} />}
      <Footer />
    </div>
  );
};

export default WordlePage;
