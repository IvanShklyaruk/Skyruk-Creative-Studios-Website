import { useEffect, useState } from "react";
import WordleInterface from "../components/WordleComponents/WordleInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/WordleStyles/WordlePage.css";

const WordlePage = () => {
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.datamuse.com/words?sp=?????")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        const words = json.map((wordObj) => wordObj.word);
        const randomSolution = words[Math.floor(Math.random() * words.length)];
        setSolution(randomSolution);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="wordle-page">
      <Navbar />
      <h1>Wordle</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {solution && <WordleInterface solution={solution} />}
      <Footer />
    </div>
  );
};

export default WordlePage;
