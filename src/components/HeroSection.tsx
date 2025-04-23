
import { useEffect, useRef } from 'react';
import { ArrowRight, Rocket, Star } from 'lucide-react';

const HeroSection = () => {
  const astronautRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      if (astronautRef.current) {
        astronautRef.current.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
      }
      
      if (planetRef.current) {
        planetRef.current.style.transform = `translate(${-x * 25}px, ${-y * 25}px) rotate(${x * 10}deg)`;
      }
      
      if (starsRef.current) {
        starsRef.current.style.transform = `translate(${-x * 10}px, ${-y * 10}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative elements */}
      <div 
        ref={planetRef}
        className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-space-purple to-blue-400 opacity-10 animate-spin-slow"
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
        ref={astronautRef}
        className="absolute bottom-1/4 left-20 w-32 h-32 lg:w-48 lg:h-48 opacity-80 animate-float"
      >
        <div className="relative w-full h-full">
          <Rocket 
            size={48} 
            className="absolute top-0 left-0 w-full h-full text-space-purple animate-pulse-slow"
          />
          <div className="absolute -bottom-10 -left-10 w-20 h-1 bg-gradient-to-r from-space-purple to-transparent opacity-30 animate-pulse-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-block relative mb-6">
            <Star className="absolute -top-10 -left-10 text-space-purple animate-pulse-slow opacity-70" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-space-purple via-blue-400 to-space-purple bg-size-200 animate-shimmer">
              Rawan Mohamed Rehab
            </h1>
            <Star className="absolute -bottom-10 -right-10 text-space-blue animate-pulse-slow opacity-70" style={{animationDelay: '1s'}}/>
          </div>
          
          <div className="relative mb-8">
            <h2 className="text-2xl md:text-3xl font-mono text-white inline-block">
              <span className="inline-block relative">
                Frontend
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-space-purple to-transparent"></span>
              </span> 
              <span className="text-space-purple inline-block ml-3">Developer</span>
            </h2>
            <div className="absolute -right-8 top-0 w-2 h-2 rounded-full bg-space-purple animate-ping"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Crafting stellar user experiences with modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="cosmic-button group"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
              <ArrowRight className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" size={18} />
            </a>
            
            <a 
              href="#projects" 
              className="text-white underline decoration-space-purple decoration-2 underline-offset-4 hover:text-space-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-10 text-gray-400 p-2 rounded-lg backdrop-blur-sm bg-white/5 inline-block">
            <p className="font-mono">rawanrehab929@gmail.com</p>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <a 
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll down"
        >
          <ArrowRight className="transform rotate-90 text-space-purple" size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
