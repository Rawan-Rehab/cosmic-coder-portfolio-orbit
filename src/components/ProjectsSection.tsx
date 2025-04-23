
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Amazon E-commerce Website',
    description: 'Full e-commerce platform with user authentication, product catalog, and account management.',
    technologies: ['React', 'Bootstrap', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Admin Dashboard Website',
    description: 'Administrative interface with secure login, protected routes, and comprehensive product management.',
    technologies: ['React.js', 'Laravel', 'Token Authentication'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'E-commerce Website',
    description: 'Multi-role platform with different permissions for administrators and users.',
    technologies: ['React', 'Bootstrap', 'User Permissions'],
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Create Selector',
    description: 'Interactive element selection tool with custom user interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Landing Page',
    description: 'Engaging and responsive landing page design with modern aesthetics.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    title: 'Website Design',
    description: 'Fully responsive website design optimized for all device sizes.',
    technologies: ['Bootstrap', 'Responsive Design'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    title: 'Email Activation Test',
    description: 'Email verification and activation system with user notification.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80'
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [animatingProjects, setAnimatingProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectIndex = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimatingProjects(prev => [...prev, projects[projectIndex]]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.project-card').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.project-card').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = '';
  };
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-space-purple">My</span> Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card cosmic-card group cursor-pointer transition-all duration-500 ${
                animatingProjects.includes(project) ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              data-index={index}
              onClick={() => openModal(project)}
            >
              <div className="h-40 overflow-hidden rounded mb-4">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="skill-badge">{tech}</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="text-space-purple flex items-center font-medium group-hover:text-white">
                View Details
                <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          <div className="relative z-10 bg-space-dark rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="p-8">
              <div className="h-64 overflow-hidden rounded-lg mb-6">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-white">{activeProject.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech, i) => (
                  <span key={i} className="skill-badge bg-space-purple">{tech}</span>
                ))}
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2 text-space-purple">Description</h4>
                <p className="text-gray-300">{activeProject.description}</p>
                <p className="text-gray-300 mt-4">This project demonstrates my ability to create intuitive user interfaces and implement complex functionality using modern web technologies.</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2 text-space-purple">Key Features</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Responsive design for all device sizes</li>
                  <li>Interactive user interface with smooth animations</li>
                  <li>Optimized performance and loading times</li>
                  <li>Clean, maintainable code architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
