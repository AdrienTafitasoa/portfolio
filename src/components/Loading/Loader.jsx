import { useEffect } from 'react';
import './preloader.css';
import { preLoaderAnim } from './animate';
function LoadingScreen() {
useEffect(()=>{
 preLoaderAnim();
},[]);

  return (
    <div className="preloader">
      <div className='texts-container'>
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibe.</span>
      </div>
    </div>
  );
}

export default LoadingScreen;