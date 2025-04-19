
import { useState } from 'react';

const experiences = [
  {
    id: "stevens",
    title: "Graduate Teaching Assistant",
    company: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA",
    date: "Sep 2023 - May 2024",
    description: [
      "Assisted professors in teaching computer science courses, providing technical support and guidance to students.",
      "Conducted lab sessions, graded assignments, and held office hours to help students understand complex programming concepts.",
      "Collaborated with faculty to improve course materials and teaching methodologies."
    ]
  },
  {
    id: "matcut",
    title: "Software Developer",
    company: "MatCut Enterprise",
    location: "India",
    date: "Aug 2020 - Aug 2022",
    description: [
      "Designed and implemented scalable software solutions using Java, JavaScript, and Spring Boot.",
      "Built RESTful APIs and improved database performance using SQL and NoSQL technologies.",
      "Participated in full software development lifecycle, from requirements gathering to deployment and maintenance.",
      "Collaborated with cross-functional teams to deliver high-quality solutions that met business requirements."
    ]
  },
  {
    id: "zeronsec",
    title: "Junior Software Developer",
    company: "Zeronsec",
    location: "India",
    date: "Feb 2020 - Jul 2020",
    description: [
      "Assisted in developing web applications using HTML, CSS, JavaScript, and React.",
      "Participated in code reviews and implemented feedback to improve code quality.",
      "Worked with senior developers to learn best practices and improve technical skills.",
      "Contributed to database design and implementation using MongoDB."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  
  const activeExperience = experiences.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="section-heading">Where I've Worked</h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Tabs */}
          <div className="flex md:block overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-muted">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`px-5 py-3 font-mono text-sm whitespace-nowrap md:border-l-2 transition-colors duration-200 hover:bg-navy-light/50 hover:text-green ${
                  activeTab === exp.id 
                    ? 'text-green md:border-l-green bg-navy-light/30'
                    : 'text-slate md:border-l-transparent'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="md:col-span-3">
            {activeExperience && (
              <div>
                <h3 className="text-xl text-slate-lightest mb-1">
                  <span>{activeExperience.title}</span>
                  <span className="text-green"> @ {activeExperience.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mb-4">{activeExperience.date}</p>
                <p className="italic text-slate mb-4">{activeExperience.location}</p>
                <ul className="space-y-3">
                  {activeExperience.description.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-green mr-2">▹</span>
                      <span className="text-slate-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
