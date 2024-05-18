import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Library(props) {
  const { nodes, materials } = useGLTF('../../public/models/library.glb')
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={22.895} position={[39.928, 6.208, 0.948]} rotation={[-0.253, 1.54, 0.252]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.QuartziteDenali002_8K} position={[0, 1, 0]} scale={[12.79, 1, 10.371]} />
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[6.802, 6.95, -0.438]} />
    </group>
  )
}

useGLTF.preload('../../public/models/library.glb')