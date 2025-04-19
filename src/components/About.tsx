
const About = () => {
  const skills = [
    "Java", "Python", "JavaScript", "React.js", "HTML/CSS",
    "Node.js", "Spring Boot", "REST APIs", "AWS", "Docker",
    "MongoDB", "PostgreSQL", "MySQL", "Git", "Agile"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="mb-4 text-slate-light">
              Hello! I'm Jay, a software developer with 3 years of experience in designing and implementing 
              scalable software solutions. My journey in tech began during my undergraduate studies in Computer Science
              at Parul University in India, and continued with my Master's at Stevens Institute of Technology in New Jersey.
            </p>
            
            <p className="mb-4 text-slate-light">
              I specialize in backend development, API design, cloud computing, and database management.
              I'm passionate about solving complex problems, optimizing performance, and driving innovation
              through clean code and Agile methodologies.
            </p>
            
            <p className="mb-8 text-slate-light">
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green mr-2">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="relative group">
              <div className="absolute -inset-2 rounded-md bg-green/20 opacity-75 blur-sm group-hover:opacity-100 transition duration-200"></div>
              <div className="relative aspect-square rounded-md overflow-hidden border-2 border-green">
                <div className="absolute inset-0 bg-green/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Jay Bhesania" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
