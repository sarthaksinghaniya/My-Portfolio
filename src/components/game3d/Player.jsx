"use client";

import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function Player() {
  const rigidBody = useRef();
  
  // Create a mathematical plane at Y=0 (the ground)
  const groundPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), []);
  const targetVector = useMemo(() => new THREE.Vector3(), []);
  const currentVel = useMemo(() => new THREE.Vector3(), []);
  
  useFrame((state) => {
    if (!rigidBody.current) return;

    // Raycast from the camera through the mouse pointer to the ground plane
    state.raycaster.setFromCamera(state.pointer, state.camera);
    state.raycaster.ray.intersectPlane(groundPlane, targetVector);

    // Get current position
    const pos = rigidBody.current.translation();
    const currentPos = new THREE.Vector3(pos.x, pos.y, pos.z);

    // Calculate direction and distance to target
    const direction = targetVector.clone().sub(currentPos);
    direction.y = 0; // Keep movement purely horizontal
    
    const distance = direction.length();

    // If we're far enough from the mouse, move towards it
    if (distance > 1) {
      direction.normalize();
      const speed = 10;
      
      // Calculate desired velocity
      currentVel.set(direction.x * speed, 0, direction.z * speed);
      
      // Apply the velocity to the physics body
      const linvel = rigidBody.current.linvel();
      rigidBody.current.setLinvel({ x: currentVel.x, y: linvel.y, z: currentVel.z }, true);
      
      // Optional: Make the character look at the target
      const lookAtPos = new THREE.Vector3(targetVector.x, pos.y, targetVector.z);
      const lookMatrix = new THREE.Matrix4().lookAt(currentPos, lookAtPos, new THREE.Vector3(0,1,0));
      const lookQuaternion = new THREE.Quaternion().setFromRotationMatrix(lookMatrix);
      // Smooth rotation (slerp) could be added here, but direct setting is fine for MVP
      // We can't directly set rotation easily on dynamic bodies without affecting physics, 
      // but setNextKinematicRotation or applying torque works.
      // For simplicity, we just move it.
    } else {
      // Stop moving when close to cursor
      const linvel = rigidBody.current.linvel();
      rigidBody.current.setLinvel({ x: 0, y: linvel.y, z: 0 }, true);
    }
  });

  return (
    <RigidBody 
      ref={rigidBody}
      type="dynamic" 
      position={[0, 2, 0]}
      enabledRotations={[false, false, false]} // Don't fall over
      friction={0}
      restitution={0}
      linearDamping={2}
    >
      <mesh castShadow>
        <capsuleGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#F7C948" emissive="#F7C948" emissiveIntensity={0.2} />
      </mesh>
    </RigidBody>
  );
}
