/* eslint-disable react/no-unknown-property */

import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Model = () => {
    const { scene } = useGLTF("/scene.gltf");
    const modelRef = useRef();


    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.position.set(0, -0.5, 0);
        }
    });

    return <primitive ref={modelRef} object={scene} scale={1.5} />;
};



const ThreeDModel = () => {
    return (
        <div style={{
            width: "400px",
            height: "350px",
            border: "2px solid #222",
            borderRadius: "10px",
            background: "linear-gradient(to bottom, #abafb6, #787a7d)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Canvas style={{ width: "100%", height: "100%" }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />

                <Bounds fit clip observe>
                <Model />
                </Bounds>
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ThreeDModel;
