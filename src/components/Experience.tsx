
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 'stevens',
    title: 'Graduate Teaching Assistant',
    company: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ, USA',
    date: 'Sep 2023 – May 2024',
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
    date: 'Aug 2020 – Aug 2022',
    description: [
      'Designed and implemented scalable software solutions using Java, JavaScript, and Spring Boot.',
      'Built RESTful APIs and improved database performance using SQL and NoSQL technologies.',
      'Participated in full software development lifecycle, from requirements gathering to deployment and maintenance.',
    ],
  },
  {
    id: 'zeronsec',
    title: 'Junior Software Developer',
    company: 'Zeronsec',
    location: 'India',
    date: 'Feb 2020 – Jul 2020',
    description: [
      'Assisted in developing web applications using HTML, CSS, JavaScript, and React.',
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
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-16 text-center reveal">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="reveal"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 bg-gray-100 p-6 rounded-lg border border-gray-200 shadow-lg">
                <div className="md:w-16 flex-shrink-0 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#4F46E5]/20 flex items-center justify-center">
                    <Briefcase className="text-[#4F46E5]" size={20} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-[#2B2B2B]">{exp.title}</h3>
                    <span className="text-[#555555] text-sm bg-white px-3 py-1 rounded-full mt-2 sm:mt-0 border border-gray-200">
                      {exp.date}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-[#06B6D4] font-medium">{exp.company}</span>
                    <span className="mx-2 text-[#555555]">•</span>
                    <span className="text-[#555555]">{exp.location}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#4F46E5] mr-2 mt-1">▹</span>
                        <span className="text-[#555555]">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
