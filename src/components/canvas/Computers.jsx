import React, { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Spline from '@splinetool/react-spline';

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { width } = useWindowSize();
  
    useEffect(() => {
      setIsMobile(width < 768);
    }, [width]);
  
    return (
      <div className='w-full h-full'>
        {/* Conditionally render Spline component based on screen size */}
        {isMobile ? (
          <Spline className='w-auto h-auto' scene='https://prod.spline.design/9yS3v2XzywOByx0J/scene.splinecode'/>
        ) : (
          <Spline className='w-auto h-auto' scene='https://prod.spline.design/ZufrXj6z-6bl3o7S/scene.splinecode'/>
        )}
      </div>
    );
  };

export default ComputersCanvas;
