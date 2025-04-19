
import { ExternalLink, Github } from 'lucide-react';
import ProjectCardMobile from './ProjectCardMobile';

const projects = [
  {
    title: "Receipt Processing API",
    description: "A high-performance RESTful API capable of processing 100+ API requests per second, using DynamoDB for in-memory data storage. Engineered business logic for receipt validation and reward point calculation, achieving 95% accuracy in transaction-based reward distribution with robust test coverage.",
    tags: ["Java 17", "Spring Boot", "DynamoDB", "Docker", "JUnit 5", "Test containers"],
    links: {
      github: "#",
      external: "#"
    },
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    title: "Apartment Scout",
    description: "A web application for international students to find verified accommodation, improving the user search experience through efficient database indexing. Implemented a real-time chat feature, improving student-landlord communication and leading to a 15% increase in user engagement. Optimized MongoDB queries to reduce data retrieval time by 25%.",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB", "Node.js"],
    links: {
      github: "#",
      external: "#"
    },
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
  },
  {
    title: "Baby Care Web App",
    description: "Led a team of five developers as Scrum Master, applying Agile methodologies to accelerate development by 50% through structured sprint reviews and continuous integration. Engineered role-based access controls and encryption protocols, achieving a 95% success rate in preventing unauthorized data access.",
    tags: ["React.js", "Spring Boot", "AWS", "MySQL", "HTML", "CSS"],
    links: {
      github: "#",
      external: "#"
    },
    image: "https://plus.unsplash.com/premium_photo-1663011221332-71e876ef4589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
  },
  {
    title: "Search Engine",
    description: "A tool built with NodeJS that can search for a specific word on a webpage and provide the number of times it appears. The search results are ranked based on the number of occurrences of the searched word, with the page having the highest number listed first.",
    tags: ["HTML", "JavaScript", "Node.js"],
    links: {
      github: "#",
      external: "#"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Heart Stroke Analysis",
    description: "Led a team project focused on early detection of strokes and cardiac diseases utilizing Python and a Kaggle dataset. Conducted an exhaustive analysis of patient health history data, implementing 8 different algorithms. Achieved an impressive accuracy range of 75% to 98% across algorithms.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    links: {
      github: "#",
      external: "#"
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="section-heading">Some Things I've Built</h2>
        
        {/* Mobile project cards */}
        <div className="md:hidden">
          {projects.map((project, index) => (
            <ProjectCardMobile key={index} project={project} />
          ))}
        </div>
        
        {/* Desktop project cards */}
        <div className="hidden md:block space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content bg-navy-light/80 md:bg-transparent">
                <p className="font-mono text-green text-sm mb-1">Featured Project</p>
                <h3 className="text-2xl font-semibold text-slate-lightest mb-6">{project.title}</h3>
                
                <div className="md:bg-navy-light p-0 md:p-6 rounded-md shadow-xl">
                  <p className="text-slate-light">{project.description}</p>
                </div>
                
                <ul className="project-tech-list">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="font-mono">{tag}</li>
                  ))}
                </ul>
                
                <div className={`flex mt-6 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green mr-4">
                    <Github size={20} />
                  </a>
                  <a href={project.links.external} target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-green">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-image">
                <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green/30 mix-blend-multiply hover:bg-transparent transition-all duration-300"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
