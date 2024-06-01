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
            10.690409819478292, 5.85690639323601, -0.9805512698771267,
            -0.7385785612766133, 3.832745517933255, -0.378328702161851,
          ],
          fov: 75,
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default TestPage;
