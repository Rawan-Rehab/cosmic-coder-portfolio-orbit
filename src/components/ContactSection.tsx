
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-space-purple">Get</span> In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="cosmic-card">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-space-purple mr-4" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:rawanrehab929@gmail.com" className="text-white hover:text-space-purple transition-colors">
                    rawanrehab929@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-space-purple mr-4" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:01202931726" className="text-white hover:text-space-purple transition-colors">
                    01202931726
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Github className="text-space-purple mr-4" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a 
                    href="https://github.com/Rawan-Rehab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-space-purple transition-colors"
                  >
                    github.com/Rawan-Rehab
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="text-space-purple mr-4" size={24} />
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/rawan-rehab" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-space-purple transition-colors"
                  >
                    linkedin.com/in/rawan-rehab
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cosmic-card">
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-muted text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-space-purple"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-muted text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-space-purple"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-muted text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-space-purple resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="cosmic-button w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-space-purple border-t-transparent rounded-full"></div>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
