import { useEffect } from 'react';
import loadingPace from './loadingPace';

function LoadingScreen() {
  useEffect(() => {
    setTimeout(() => {
      if (typeof Pace !== 'undefined') loadingPace();
    }, 1000);
  });

  return (
    <div className="hideX">
      <div className="loading">
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
      </div>
      <div id="preloader"></div>
    </div>
  );
}

export default LoadingScreen;