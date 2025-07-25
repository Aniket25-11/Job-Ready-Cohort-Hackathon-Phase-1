import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience2 } from "../Book2/Experience2";
import { UI2 } from "../Book2/UI2";

function ProductDetailsSection2() {
  return (
    <>
      <UI2 />
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
            <Experience2 />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default ProductDetailsSection2;
