import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience';
import "../styles/TestPage.css";


const TestPage = () => {
    return (
    <div className="test-page">
        <Canvas shadows camera={{ position: [6.71, 3.07, -0.07], fov: 125 }}>
            <Experience />
        </Canvas>
    </div>
    );
}

export default TestPage