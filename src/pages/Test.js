import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience';
import "../styles/Test.css";


function Test() {
    return (
    <div className="test">
        <Canvas>
            <Experience />
        </Canvas>
    </div>
    );
}

export default Test;