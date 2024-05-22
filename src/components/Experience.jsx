import { OrbitControls } from "@react-three/drei"
import { LibraryModel } from "./LibraryModel"

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
            <LibraryModel />
        </>
    )
}