
import { useEffect, useRef } from 'react';
import { Smartphone, Rocket, Star } from 'lucide-react';

interface HeroSectionProps {
  name: string;
  role: string;
  email: string;
}

const HeroSection = ({ name, role, email }: HeroSectionProps) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      if (phoneRef.current) {
        phoneRef.current.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
      }
      
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${-x * 25}px, ${-y * 25}px) rotate(${x * 10}deg)`;
      }
      
      if (starsRef.current) {
        starsRef.current.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div 
        ref={rocketRef}
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-10 animate-spin-slow"
      ></div>
      
      <div 
        ref={starsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-3/4 w-3 h-3 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div 
        ref={phoneRef}
        className="absolute bottom-1/4 left-20 w-32 h-32 lg:w-48 lg:h-48 opacity-80 animate-float"
      >
        <div className="relative w-full h-full">
          <Smartphone 
            size={48} 
            className="absolute top-0 left-0 w-full h-full text-blue-400 animate-pulse-slow"
          />
          <div className="absolute -bottom-10 -left-10 w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent opacity-30 animate-pulse-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block relative mb-6">
            <Star className="absolute -top-10 -left-10 text-blue-400 animate-pulse-slow opacity-70" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-200 animate-shimmer">
              {name}
            </h1>
            <Star className="absolute -bottom-10 -right-10 text-purple-400 animate-pulse-slow opacity-70" style={{animationDelay: '1s'}}/>
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-3xl font-mono text-white inline-block">
              <span className="inline-block relative">
                {role}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              </span>
            </h2>
            <div className="absolute -right-8 top-0 w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional mobile experiences with Flutter, Kotlin, and Swift
          </p>
          
          <div className="mt-10 text-gray-400 p-2 rounded-lg backdrop-blur-sm bg-white/5 inline-block">
            <p className="font-mono">{email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
