
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const astronautRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      if (astronautRef.current) {
        astronautRef.current.style.transform = `translate(${x * 20}px, ${y * 10}px)`;
      }
      
      if (planetRef.current) {
        planetRef.current.style.transform = `translate(${-x * 15}px, ${-y * 15}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Decorative elements */}
      <div 
        ref={planetRef}
        className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-space-purple opacity-10 animate-spin-slow"
      ></div>
      
      <div 
        ref={astronautRef}
        className="absolute bottom-1/4 left-20 w-20 h-20 lg:w-32 lg:h-32 opacity-20 animate-float"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 5V2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.7778 19.7778L17.5558 17.5558" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.44427 6.44427L4.22217 4.22217" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.7778 4.22217L17.5558 6.44427" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.44427 17.5558L4.22217 19.7778" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-space-purple to-blue-400">
            Rawan Mohamed Rehab
          </h1>
          
          <h2 className="text-xl md:text-2xl font-mono text-white mb-8">
            <span className="inline-block">Frontend</span> <span className="text-space-purple inline-block">Developer</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            Crafting stellar user experiences with modern web technologies
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="cosmic-button"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
              <ArrowRight className="ml-2 inline" size={16} />
            </a>
            
            <a 
              href="#projects" 
              className="text-white underline underline-offset-4 hover:text-space-purple transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>rawanrehab929@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
