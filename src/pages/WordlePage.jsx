import { useEffect, useState } from "react";
import WordleInterface from '../components/WordleInterface'
import "../styles/WordlePage.css";

const WordlePage = () => {
    const [solution, setSolution] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/solutions')
        .then(res => res.json())
        .then(json => {
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word)
        })
    }, [setSolution])

    return (
        <div className="wordle-page">
            <h1>Wordle</h1>
            {solution && <WordleInterface solution={solution}/>}
        </div>
    );
}

export default WordlePage
