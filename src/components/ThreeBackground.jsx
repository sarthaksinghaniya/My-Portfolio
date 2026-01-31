import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ scrollOpacity = 1, baseSpeed = 0.03, color = '#7c3aed', size = 0.01, spread = 10, reverse = false, reduced = false, count = 2600 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * spread
    return arr
  }, [spread, count])
  const group = useRef()
  const material = useRef()
  const { mouse } = useThree()

  let frame = 0
  useFrame(({ clock }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    if (!reduced) {
      // Gentle base rotation + float
      const dir = reverse ? -1 : 1
      group.current.rotation.y = t * baseSpeed * dir
      group.current.position.y = Math.sin(t * 0.4) * 0.05
      // Mouse parallax
      // Sample mouse every 2 frames to reduce work
      if ((frame++ & 1) === 0) {
        const targetRotX = mouse.y * 0.15
        const targetRotY = mouse.x * 0.15
        group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.05
        group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.05
      }
    }
    // opacity stays constant; no per-frame updates
  })

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial ref={material} size={size} color={new THREE.Color(color)} sizeAttenuation transparent opacity={scrollOpacity} depthWrite={false} />
      </points>
    </group>
  )
}

export default function ThreeBackground(){
  const [opacity, setOpacity] = useState(1)
  const [speed, setSpeed] = useState(0.03)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateRM = () => setReduced(!!mq.matches)
    updateRM()
    mq.addEventListener?.('change', updateRM)
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop || window.pageYOffset
      const max = (doc.scrollHeight - window.innerHeight) || 1
      const p = Math.min(1, Math.max(0, scrollTop / max))
      // Fade a touch as you go deeper, and reduce speed slightly
      if (!mq.matches) {
        setOpacity(1) // keep fully opaque at all times
        setSpeed(0.03 + (1 - p) * 0.02)
      } else {
        setOpacity(1)
        setSpeed(0)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener?.('change', updateRM)
    }
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0,0,3], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
        shadows={false}
      >
        {/* Subtle fog for a cleaner scene */}
        <fog attach="fog" args={["#0b1220", 4, 12]} />
        <ambientLight intensity={0.35} />
        {/* Near layer */}
        <Particles scrollOpacity={opacity} baseSpeed={speed} color="#7c3aed" size={0.01} spread={10} reduced={reduced} count={4000} />
        {/* Far layer for depth */}
        <Particles scrollOpacity={Math.max(0, opacity - 0.1)} baseSpeed={speed * 0.5} color="#22d3ee" size={0.008} spread={16} reverse reduced={reduced} count={3200} />
        {/* Additional middle layer for more density */}
        <Particles scrollOpacity={Math.max(0, opacity - 0.05)} baseSpeed={speed * 0.7} color="#a855f7" size={0.006} spread={12} reduced={reduced} count={2800} />
      </Canvas>
      {/* Top/bottom gradient to keep content readable */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/0 via-slate-950/10 to-slate-950" />
    </div>
  )
}
