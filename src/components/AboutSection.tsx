
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-space-purple">About</span> Me
          </h2>
          
          <div className="cosmic-card">
            <p className="text-lg mb-6 text-gray-300">
              I'm a passionate Frontend Developer with <span className="text-space-purple font-semibold">3 years of experience</span> crafting seamless, responsive user interfaces that blend creativity with functionality.
            </p>
            
            <p className="text-lg mb-6 text-gray-300">
              My expertise lies in building modern web applications using <span className="text-space-purple">React.js</span>, <span className="text-blue-400">Bootstrap</span>, and other cutting-edge technologies. I'm dedicated to creating exceptional user experiences that are both beautiful and performance-optimized.
            </p>
            
            <p className="text-lg text-gray-300">
              Whether it's developing e-commerce platforms, admin dashboards, or interactive web applications, I approach each project with enthusiasm, attention to detail, and a commitment to technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
