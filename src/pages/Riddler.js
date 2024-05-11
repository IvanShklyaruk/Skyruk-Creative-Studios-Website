import { useEffect, useState } from "react";
import RiddlerInterface from '../components/RiddlerInterface'
import "../styles/Riddler.css";

function Riddler() {
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
        <div className="Riddler">
            <h1>Riddler</h1>
            {solution && <RiddlerInterface solution={solution}/>}
        </div>
    );
}

export default Riddler;
