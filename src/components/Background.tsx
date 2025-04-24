
import { useEffect, useRef } from 'react';

const Background = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);
  const meteorsContainerRef = useRef<HTMLDivElement>(null);
  const planetsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starsContainerRef.current) return;
    
    // Create stars
    const container = starsContainerRef.current;
    const starCount = 300; // More stars

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('space-star');
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random size
      const size = Math.random() * 4; // Larger stars
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random opacity for twinkling effect
      star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
      
      // More varied animation
      const duration = Math.random() * 8 + 2;
      star.style.animation = `pulse-slow ${duration}s ease-in-out infinite`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(star);
    }

    // Create meteors
    if (meteorsContainerRef.current) {
      const meteorContainer = meteorsContainerRef.current;
      const meteorCount = 15; // More meteors
      
      for (let i = 0; i < meteorCount; i++) {
        createMeteor(meteorContainer);
      }
    }
    
    // Create distant planets
    if (planetsContainerRef.current) {
      const planetContainer = planetsContainerRef.current;
      const planetCount = 3;
      
      for (let i = 0; i < planetCount; i++) {
        createPlanet(planetContainer, i);
      }
    }
    
    return () => {
      if (container) {
        container.innerHTML = '';
      }
      if (meteorsContainerRef.current) {
        meteorsContainerRef.current.innerHTML = '';
      }
      if (planetsContainerRef.current) {
        planetsContainerRef.current.innerHTML = '';
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
    
    // Random size and more varied appearance
    const size = Math.random() * 150 + 50;
    meteor.style.height = `${size}px`;
    meteor.style.opacity = `${Math.random() * 0.4 + 0.6}`;
    
    // Random animation duration
    const duration = Math.random() * 4 + 3;
    meteor.style.animation = `meteor ${duration}s linear`;
    
    // Remove meteor after animation and create a new one
    meteor.addEventListener('animationend', () => {
      meteor.remove();
      createMeteor(container);
    });
    
    container.appendChild(meteor);
  };
  
  const createPlanet = (container: HTMLDivElement, index: number) => {
    const planet = document.createElement('div');
    planet.classList.add('space-planet');
    
    // Different positions for each planet
    const positions = [
      { left: '15%', top: '20%', size: 80, color: 'linear-gradient(45deg, #3B82F6, #8B5CF6)' },
      { left: '85%', top: '60%', size: 120, color: 'linear-gradient(45deg, #6366F1, #A855F7)' },
      { left: '70%', top: '15%', size: 60, color: 'linear-gradient(45deg, #60A5FA, #7C3AED)' }
    ];
    
    const pos = positions[index % positions.length];
    planet.style.left = pos.left;
    planet.style.top = pos.top;
    planet.style.width = `${pos.size}px`;
    planet.style.height = `${pos.size}px`;
    planet.style.background = pos.color;
    
    // Add animation
    planet.style.animation = `float ${Math.random() * 10 + 15}s ease-in-out infinite`;
    
    container.appendChild(planet);
  };

  return (
    <>
      <div id="stars-container" ref={starsContainerRef}></div>
      <div className="meteors-container" ref={meteorsContainerRef}></div>
      <div className="planets-container" ref={planetsContainerRef}></div>
    </>
  );
};

export default Background;
