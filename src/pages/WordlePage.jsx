import { useEffect, useState } from "react";
import WordleInterface from "../components/WordleComponents/WordleInterface";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/WordleStyles/WordlePage.css";

const WordlePage = () => {
  const [solution, setSolution] = useState(null);
  const [loading, setLoading] = useState(true);

  // List of 100 five-letter words
  const words = [
    "apple",
    "blush",
    "crane",
    "drake",
    "eagle",
    "fable",
    "grape",
    "honey",
    "ivory",
    "jolly",
    "knife",
    "lodge",
    "mango",
    "naval",
    "oasis",
    "piano",
    "quail",
    "raven",
    "sheep",
    "tiger",
    "uncle",
    "vivid",
    "waltz",
    "xenon",
    "yacht",
    "zebra",
    "alarm",
    "beach",
    "charm",
    "draft",
    "eager",
    "fancy",
    "globe",
    "house",
    "image",
    "joker",
    "karma",
    "laser",
    "magic",
    "nerve",
    "ocean",
    "peace",
    "queen",
    "robot",
    "stone",
    "trust",
    "under",
    "voice",
    "wrist",
    "xerox",
    "youth",
    "zonal",
    "adopt",
    "blend",
    "crowd",
    "dream",
    "enemy",
    "frost",
    "glory",
    "hotel",
    "ideal",
    "jewel",
    "kneel",
    "lemon",
    "march",
    "nerdy",
    "olive",
    "party",
    "quiet",
    "route",
    "storm",
    "title",
    "ultra",
    "visit",
    "wheel",
    "xylem",
    "yield",
    "zebra",
    "about",
    "brave",
    "creek",
    "doubt",
    "exact",
    "flame",
    "grave",
    "hatch",
    "input",
    "jumpy",
  ];

  useEffect(() => {
    const randomSolution = words[Math.floor(Math.random() * words.length)];
    setSolution(randomSolution);
    setLoading(false);
  }, []);

  return (
    <div className="wordle-page">
      <Navbar />
      <h1>Wordle Clone</h1>
      {loading && <p>Loading...</p>}
      {solution && <WordleInterface solution={solution} />}
      <Footer />
    </div>
  );
};

export default WordlePage;
