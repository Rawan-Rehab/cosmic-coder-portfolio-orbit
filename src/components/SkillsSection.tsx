
import { useState, useEffect } from 'react';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Technologies',
    skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'Sass', 'Docker']
  },
  {
    name: 'Frameworks',
    skills: ['React.js', 'Bootstrap', 'Tailwind CSS']
  },
  {
    name: 'Version Control',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket']
  },
  {
    name: 'AI Tools',
    skills: ['Copilot', 'Codeium']
  },
  {
    name: 'Soft Skills',
    skills: ['Communication', 'Adaptability', 'Time Management', 'Innovation', 'Problem-solving', 'Empathy', 'Teamwork', 'Negotiation']
  }
];

const SkillsSection = () => {
  const [animatingCategories, setAnimatingCategories] = useState<string[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryName = entry.target.getAttribute('data-category');
            if (categoryName) {
              setAnimatingCategories(prev => [...prev, categoryName]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.skill-category').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.skill-category').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-space-purple">My</span> Skills
        </h2>
        
        <div className="cosmic-card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div 
                key={category.name}
                className={`skill-category ${
                  animatingCategories.includes(category.name) ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                data-category={category.name}
              >
                <h3 className="text-xl font-semibold mb-4 text-space-purple">{category.name}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
