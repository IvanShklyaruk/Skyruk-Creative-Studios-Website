import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience';
import "../styles/TestPage.css";


const TestPage = () => {
    return (
    <div className="test-page">
        <Canvas shadows camera={{ position: [8.5, 4.5, 0], fov: 125 }}>
            <Experience />
        </Canvas>
    </div>
    );
}

export default TestPage