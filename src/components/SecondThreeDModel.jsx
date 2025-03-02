/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
    const { scene } = useGLTF("/2015.gltf");
    return <primitive object={scene} scale={40} />;
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
            <Canvas style={{ width: "400px", height: "350px" }}
                    camera={{ position: [0, 1, 3], fov: 50 }} 
            
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 2, 2]} intensity={1} />
                <Model />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default ThreeDModel;
