import { useEffect } from 'react';
import './preloader.css';
function LoadingScreen() {
useEffect(()=>{
 
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