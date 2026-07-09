"use client";

import { RigidBody } from "@react-three/rapier";
import { Float } from "@react-three/drei";
import ZoneTrigger from "./ZoneTrigger";

export default function BaseWorld() {
  return (
    <group>
      {/* Ground Physics */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh receiveShadow position={[0, -0.5, 0]}>
          <boxGeometry args={[100, 1, 100]} />
          <meshStandardMaterial color="#08111D" transparent opacity={0} />
        </mesh>
      </RigidBody>



      {/* Decorative Floating Islands / Platforms (Placeholders for Castle, Skills, etc) */}
      
      {/* 1. Castle Zone (Home) */}
      <RigidBody type="fixed" colliders="cuboid" position={[0, 0, -15]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[10, 2, 10]} />
          <meshStandardMaterial color="#3E4758" />
        </mesh>
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={[0, 4, 0]} castShadow>
            <cylinderGeometry args={[2, 2, 6, 8]} />
            <meshStandardMaterial color="#4F8CFF" emissive="#4F8CFF" emissiveIntensity={0.2} />
          </mesh>
        </Float>
        <ZoneTrigger position={[0, 2, 8]} size={[4, 2, 4]} zoneName="Castle" />
      </RigidBody>

      {/* 2. Skills Tower Zone */}
      <RigidBody type="fixed" colliders="cuboid" position={[15, 0, 5]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[8, 4, 8]} />
          <meshStandardMaterial color="#111827" />
        </mesh>
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <mesh position={[0, 6, 0]} castShadow>
            <octahedronGeometry args={[2]} />
            <meshStandardMaterial color="#3DDC97" emissive="#3DDC97" emissiveIntensity={0.4} wireframe />
          </mesh>
        </Float>
        <ZoneTrigger position={[-5, 2, 0]} size={[4, 2, 4]} zoneName="Skills" />
      </RigidBody>

      {/* 3. Project Arena Zone */}
      <RigidBody type="fixed" colliders="cuboid" position={[-20, 0, 10]}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[8, 8, 1, 16]} />
          <meshStandardMaterial color="#172033" />
        </mesh>
        <mesh position={[0, 1, 0]} castShadow>
          <torusGeometry args={[6, 0.2, 16, 50]} />
          <meshStandardMaterial color="#F7C948" emissive="#F7C948" emissiveIntensity={0.5} />
        </mesh>
        <ZoneTrigger position={[0, 2, -7]} size={[4, 2, 4]} zoneName="Projects" />
      </RigidBody>

    </group>
  );
}
