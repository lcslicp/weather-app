import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animation from '../assets/animation.json';

const LottieAnimation = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('lottie'),
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: animation,
    });
  }, []);

  return <div className="animation" id="lottie"></div>;
};

export default LottieAnimation;
