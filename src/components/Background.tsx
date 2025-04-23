
import { useEffect, useRef } from 'react';

const Background = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const meteorsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    // Create stars
    const container = starsContainerRef.current;
    const starCount = 200;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('space-star');
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = Math.random() * 3;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random opacity for twinkling effect
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
      star.style.animation = `pulse-slow ${Math.random() * 5 + 2}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }

    // Create meteors
    if (meteorsContainerRef.current) {
      const meteorContainer = meteorsContainerRef.current;
      const meteorCount = 10;
      
      for (let i = 0; i < meteorCount; i++) {
        createMeteor(meteorContainer);
      }
    }
    
    return () => {
      if (container) {
        container.innerHTML = '';
      }
      if (meteorsContainerRef.current) {
        meteorsContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  const createMeteor = (container: HTMLDivElement) => {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    
    // Random position
    const startPositionX = Math.random() * window.innerWidth;
    const startPositionY = Math.random() * window.innerHeight * 0.5; // Start in top half
    meteor.style.left = `${startPositionX}px`;
    meteor.style.top = `${startPositionY}px`;
    
    // Random size
    const size = Math.random() * 100 + 50;
    meteor.style.height = `${size}px`;
    
    // Random animation duration
    const duration = Math.random() * 3 + 3;
    meteor.style.animation = `meteor ${duration}s linear`;
    
    // Remove meteor after animation and create a new one
    meteor.addEventListener('animationend', () => {
      meteor.remove();
      createMeteor(container);
    });
    
    container.appendChild(meteor);
  };

  return (
    <>
      <div id="stars-container" ref={starsContainerRef}></div>
      <div className="meteors-container" ref={meteorsContainerRef}></div>
    </>
  );
};

export default Background;
