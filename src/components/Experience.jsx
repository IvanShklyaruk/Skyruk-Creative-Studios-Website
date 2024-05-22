import { OrbitControls } from "@react-three/drei"
import { LibraryModel } from "./LibraryModel"
import CameraPositionLogger from "../helpers/CameraPositionLogger"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
            <CameraPositionLogger event='mousedown' />
            <pointLight position={[-5, 3, 0]} intensity={100}/>
            <LibraryModel />
        </>
    )
}