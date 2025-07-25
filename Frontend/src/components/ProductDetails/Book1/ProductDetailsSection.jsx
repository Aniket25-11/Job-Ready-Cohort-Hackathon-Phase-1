import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../Book1/Experience";
import { UI } from "../Book1/UI";

function ProductDetailsSection() {
  return (
    <>
      <UI />
      {/* <Loader /> */}
      <Canvas
        shadows
        camera={{
          position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
          fov: 45,
        }}
        style={{ background: "#282c34" }} // example dark background
      >
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default ProductDetailsSection;
