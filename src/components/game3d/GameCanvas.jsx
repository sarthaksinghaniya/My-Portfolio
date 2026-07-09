"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { Environment, OrbitControls } from "@react-three/drei";
import BaseWorld from "./BaseWorld";
import Player from "./Player";

export default function GameCanvas() {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 20, 20], fov: 45 }}
      eventSource={typeof window !== 'undefined' ? document.body : undefined}
      eventPrefix="client"
    >
        <Suspense fallback={null}>
          <OrbitControls target={[0,0,0]} enableZoom={false} enablePan={false} enableRotate={false} />
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight 
            castShadow 
            position={[-10, 20, 10]} 
            intensity={1.5} 
            shadow-mapSize={[2048, 2048]}
          />
          <Environment preset="night" blur={0.5} />

          {/* Physics Engine */}
          <Physics timeStep="fixed">
            <BaseWorld />
            <Player />
          </Physics>
        </Suspense>
      </Canvas>
  );
}
