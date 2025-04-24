
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 'stevens',
    title: 'Graduate Teaching Assistant',
    company: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ, USA',
    duration: 'Sep 2023 – May 2024',
    description: [
      'Assisted professors in teaching computer science courses, providing technical support and guidance to students.',
      'Conducted lab sessions, graded assignments, and held office hours to help students understand complex programming concepts.',
    ],
  },
  {
    id: 'matcut',
    title: 'Software Developer',
    company: 'MatCut Enterprise',
    location: 'India',
    duration: 'Aug 2020 – Aug 2022',
    description: [
      'Improved backend efficiency by 10% using Node.js',
      'Implemented microservices to enhance scalability',
      'Built RESTful APIs and improved database performance using SQL and NoSQL technologies.',
    ],
  },
  {
    id: 'zeronsec',
    title: 'Junior Software Developer',
    company: 'Zeronsec',
    location: 'India',
    duration: 'Feb 2020 – July 2020',
    description: [
      'Contributed to 30% faster load times by refining Java-based web application features',
      'Participated in code reviews and implemented feedback to improve code quality.',
      'Contributed to database design and implementation using MongoDB.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-[#2B2B2B]">
        <h2 className="text-3xl font-sans font-semibold mb-16 text-center section-title">
          Experience
        </h2>
        
        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" />
          
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="reveal relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-2 h-4 w-4 rounded-full bg-gray-200 border-4 border-white" />
              
              <div className="section-card">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-[#2B2B2B]">{exp.title}</h3>
                  <div className="text-gray-700 font-medium">
                    {exp.company}, {exp.location}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    {exp.duration}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-black mr-2 mt-1">•</span>
                      <span className="text-[#555555]">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
