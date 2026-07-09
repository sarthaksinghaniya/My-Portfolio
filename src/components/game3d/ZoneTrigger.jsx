"use client";

import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { useGameStore } from "../../store/gameStore";

export default function ZoneTrigger({ position, size, zoneName }) {
  const [active, setActive] = useState(false);
  const setActiveZone = useGameStore(state => state.setActiveZone);

  return (
    <RigidBody 
      type="fixed" 
      position={position} 
      colliders="cuboid" 
      sensor
      onIntersectionEnter={() => {
        setActive(true);
        setActiveZone(zoneName);
      }}
      onIntersectionExit={() => {
        setActive(false);
        setActiveZone(null);
      }}
    >
      <mesh>
        <boxGeometry args={size} />
        <meshBasicMaterial 
          color={active ? "#3DDC97" : "#F7C948"} 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>
    </RigidBody>
  );
}
