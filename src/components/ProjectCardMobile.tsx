
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardMobileProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    links: {
      github: string;
      external: string;
    };
    image: string;
  };
}

const ProjectCardMobile = ({ project }: ProjectCardMobileProps) => {
  return (
    <div className="bg-navy-light rounded-lg overflow-hidden shadow-xl md:hidden mb-12">
      <div className="relative h-56">
        <div className="absolute inset-0 bg-green/30 mix-blend-multiply"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <p className="font-mono text-green text-sm mb-1">Featured Project</p>
        <h3 className="text-xl font-semibold text-slate-lightest mb-4">{project.title}</h3>
        
        <p className="text-slate-light mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-sm font-mono text-slate">{tag}</span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
            <Github size={20} />
          </a>
          <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
