/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/library2.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/library2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube015.geometry} material={materials['Wood Pillars']} position={[-7.838, 5.823, -0.004]} rotation={[-Math.PI, 0, 0]} scale={[-0.616, -0.045, -2.743]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials['Wood Pillars']} position={[-8.34, 5.417, 1.727]} scale={[1.138, 1.087, 0.917]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Wood Ceiling']} position={[0, 11.019, 0]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials['Wood Pillars']} position={[-5.982, 10.824, -9.122]} scale={[0.494, 0.35, 0.35]} />
      <mesh geometry={nodes.Cube018.geometry} material={materials['Wood Pillars']} position={[-7.366, 10.039, 3.155]} rotation={[0, -Math.PI / 2, 0]} scale={[1.419, 1.383, 1.658]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials['Wood Pillars']} position={[-5.966, 9.582, 8.572]} scale={[1.419, 1.247, 1.658]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials['Wood Pillars']} position={[0.83, 9.582, 8.572]} scale={[1.419, 1.247, 1.658]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials['Wood Pillars']} position={[7.646, 9.582, 8.572]} scale={[1.419, 1.247, 1.658]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Wood Pillars']} position={[-2.076, 1.437, 9.111]} />
      <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[9.621, -1.289, -0.015]} scale={0.383} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Wood Pillars']} position={[-7.078, 1.565, 8.978]} scale={[1, 0.031, 0.402]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.Material} position={[3.61, 7.184, 8.905]} rotation={[0, 0, -0.118]} scale={[0.103, 0.658, 0.471]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Wood Pillars']} position={[-0.792, 1.565, 8.978]} scale={[1, 0.031, 0.402]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Wood Pillars']} position={[-2.617, 0.204, 1.788]} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Stone Walls']} position={[0, 5.733, 0]} scale={[9, 5.5, 9]} />
      <mesh geometry={nodes.Plane.geometry} material={materials.Carpet} position={[8, 0.477, -0.136]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Stone Walls']} position={[-9.486, 1.437, 0]} scale={[1.25, 1, 3.6]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials['Material.005']} position={[-5.228, -0.054, -0.003]} scale={[0.417, 1.017, 1]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials['Stone Walls']} position={[0.01, 0, 0]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials['Stone Walls']} position={[0.01, 0, 0]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials['Stone Walls']} />
      <mesh geometry={nodes.Cube013.geometry} material={materials['Stone Walls']} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['Stone Walls']} />
    </group>
  )
}

useGLTF.preload('/library2.glb')
