import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience3 } from "../Book3/Experience3";
import { UI3 } from "../Book3/UI3";

function ProductDetailsSection3() {
  return (
    <>
      <UI3 />
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
            <Experience3 />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default ProductDetailsSection3;
