import { Canvas } from '@react-three/fiber'
import { Experience } from '../components/Experience';
import "../styles/TestPage.css";


const TestPage = () => {
    return (
    <div className="test-page">
        <Canvas>
            <Experience />
        </Canvas>
    </div>
    );
}

export default TestPage