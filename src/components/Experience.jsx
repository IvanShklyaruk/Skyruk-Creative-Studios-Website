import { OrbitControls } from "@react-three/drei"
import { LibraryModel } from "./LibraryModel"

export const Experience = () => {
    return (
        <>       
            <pointLight position={[-5, 3, 0]} intensity={100}/>
            <LibraryModel />
        </>
    )
}