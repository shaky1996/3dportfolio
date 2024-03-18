import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import Spline from '@splinetool/react-spline';

const ComputersCanvas = () => {
    return (
        <div className='w-full h-full'>
            <Spline className='w-full h-full' scene='https://prod.spline.design/ZufrXj6z-6bl3o7S/scene.splinecode'/>
        </div>
    );
};

export default ComputersCanvas;
