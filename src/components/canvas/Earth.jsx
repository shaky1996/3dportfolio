import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
    OrbitControls,
    Preload,
    useGLTF,
    useAnimations
} from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three';

const Earth = () => {
    const earthRef = useRef();
    const { scene, animations } = useGLTF('./toon_cat_free/scene.gltf');
    const { actions } = useAnimations(animations, earthRef);

    useEffect(() => {
        // Target the specific animation by name and configure it to loop
        const action = actions['Scene'];
        if (action) {
            action.reset().play();
            action.loop = THREE.LoopRepeat;
            action.clampWhenFinished = false;
        }
    }, [actions]);

    return (
        <>
            <hemisphereLight
                intensity={5}
                groundColor='black'
            />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                intensity={5}
            />
            <primitive
                ref={earthRef}
                object={scene}
                scale={0.007}
                position-y={-1.5}
                rotation-y={-1.2}
            />
        </>
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='always'
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 35,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6]
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth loop />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
