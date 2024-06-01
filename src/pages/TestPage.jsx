import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import "../styles/TestPage.css";

const TestPage = () => {
  return (
    <div className="test-page">
      <Canvas
        shadows
        camera={{
          position: [
            1.0169448845584173, 5.0952365118624545, 15.586448616475266, 0.5450852772641668, 4.839987403130891, -0.26460287443670377,
          ],
          fov: 45,
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default TestPage;
