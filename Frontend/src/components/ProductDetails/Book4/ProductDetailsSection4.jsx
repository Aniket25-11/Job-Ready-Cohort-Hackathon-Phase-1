import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience4 } from "./Experience4";
import { UI4 } from "../Book4/UI4";

function ProductDetailsSection4() {
  return (
    <>
      <UI4 />
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
            <Experience4 />
          </Suspense>
        </group>
      </Canvas>
    </>
  );
}

export default ProductDetailsSection4;
