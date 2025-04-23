
import { useEffect, useRef } from 'react';

const EducationSection = () => {
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
      id="education" 
      ref={sectionRef}
      className="py-20 opacity-0"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-space-purple">Education</span> & Certificates
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="cosmic-card">
            <h3 className="text-xl font-semibold mb-2 text-white">Education</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-space-purple">Bachelor's degree in Computer Science</h4>
              <p className="text-gray-300">Menoufia University</p>
              <p className="text-gray-400 text-sm">Very Good with honors</p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-space-purple">Graduation Project "Wafed"</h4>
              <p className="text-gray-400 text-sm">Excellent grade</p>
            </div>
          </div>
          
          <div className="cosmic-card">
            <h3 className="text-xl font-semibold mb-2 text-white">Certificates</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 rounded-full bg-space-purple mt-1.5"></div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-space-purple">Information Technology Training Institute</h4>
                  <p className="text-gray-300">Web Development Certification</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-4 w-4 rounded-full bg-space-purple mt-1.5"></div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-space-purple">Learn IT (Career 180)</h4>
                  <p className="text-gray-300">Frontend Development Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
