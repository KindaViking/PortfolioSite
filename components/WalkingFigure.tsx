"use client";

import { Suspense, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { figureCredit } from "@/lib/credits";

const MODEL_URL = figureCredit.file;

// Spin speed in radians per second, and how fast and far the limbs swing.
const SPIN_SPEED = 0.7;
const STEP_SPEED = 4.5;
const SWING = 0.7;

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

// The model loader turns spaces in node names into underscores,
// so compare names with both stripped out.
function findPart(root: THREE.Object3D, name: string) {
  const target = name.replace(/[\s_]/g, "").toLowerCase();
  let found: THREE.Object3D | undefined;
  root.traverse((obj) => {
    if (!found && obj.name.replace(/[\s_]/g, "").toLowerCase() === target) found = obj;
  });
  return found;
}

function Figure({ still }: { still: boolean }) {
  const { scene } = useGLTF(MODEL_URL);
  const model = useMemo(() => scene.clone(true), [scene]);
  const spinner = useRef<THREE.Group>(null);
  const parts = useRef<Record<string, THREE.Object3D | undefined> | null>(null);

  useFrame((state, delta) => {
    const group = spinner.current;
    if (!group || still) return;

    // Find the joints once, on the first frame. These nodes sit at the shoulders and hips,
    // so rotating them swings each limb from the joint.
    if (!parts.current) {
      parts.current = {
        head: findPart(group, "Head_2"),
        rightArm: findPart(group, "Right Arm_8"),
        leftArm: findPart(group, "Left Arm_11"),
        rightLeg: findPart(group, "Right Leg_15"),
        leftLeg: findPart(group, "Left Leg_18"),
      };
    }
    const { head, rightArm, leftArm, rightLeg, leftLeg } = parts.current;

    const t = state.clock.elapsedTime;
    const swing = Math.sin(t * STEP_SPEED) * SWING;

    group.rotation.y += delta * SPIN_SPEED;
    // A small bounce on every step
    group.position.y = Math.abs(Math.sin(t * STEP_SPEED)) * 0.05;

    // Opposite arm and leg move together, like a real walk
    if (rightArm) rightArm.rotation.x = swing;
    if (leftArm) leftArm.rotation.x = -swing;
    if (rightLeg) rightLeg.rotation.x = -swing;
    if (leftLeg) leftLeg.rotation.x = swing;
    if (head) head.rotation.y = Math.sin(t * 1.4) * 0.15;
  });

  return (
    <group ref={spinner} rotation={[0, still ? -0.5 : 0, 0]}>
      {/* the model is 2 units tall from its feet, so drop it by 1 to centre it */}
      <primitive object={model} position={[0, -1, 0]} />
    </group>
  );
}

export default function WalkingFigure() {
  const still = usePrefersReducedMotion();
  const container = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(true);

  // Stop rendering frames while the hero is scrolled out of view
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={container} className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0.15, 4.4], fov: 34 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        frameloop={onScreen ? "always" : "never"}
      >
        {/* dim warm fill, fire from below the ridge, a red rim from behind, a faint key light */}
        <ambientLight intensity={0.5} color="#ff9a5c" />
        <pointLight position={[0, -1.6, 2.2]} intensity={22} distance={12} color="#ff7a2a" />
        <directionalLight position={[-3, 2.5, -3]} intensity={3} color="#e0201e" />
        <directionalLight position={[2.5, 2, 3]} intensity={0.9} color="#ffd9b0" />
        <Suspense fallback={null}>
          <Figure still={still} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL);
