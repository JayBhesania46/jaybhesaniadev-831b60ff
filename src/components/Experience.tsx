
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
      'Collaborated with faculty to improve course materials and teaching methodologies.',
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
      'Collaborated with cross-functional teams to deliver high-quality solutions that met business requirements.',
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
      'Worked with senior developers to learn best practices and improve technical skills.',
      'Contributed to database design and implementation using MongoDB.',
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-[#2B2B2B]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-16 text-[#2B2B2B] text-center">
          Experience
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-9 gap-6">
          {/* Vertical timeline line */}
          <div className="absolute top-0 left-1/2 md:left-[calc(50%-1px)] w-[2px] h-full bg-[#2B2B2B] opacity-30 pointer-events-none"></div>

          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`md:col-span-4 col-span-1 flex flex-col ${
                  isLeft ? 'md:items-end md:pr-8' : 'md:items-start md:pl-8'
                }`}
              >
                <div
                  aria-label={`${exp.title} at ${exp.company}`}
                  className="bg-[#f0f0f0] rounded-lg p-6 shadow-lg text-[#2B2B2B] hover:scale-[1.03] transition-transform duration-300 cursor-default border border-[#c0c0c0]"
                >
                  <h3 className="font-semibold text-xl mb-1">{exp.title}</h3>
                  <p className="font-semibold mb-2" style={{ color: '#2B2B2B' }}>{exp.company}</p>
                  <p className="italic text-gray-600 mb-4" style={{ color: '#595959' }}>{exp.location}</p>
                  <ul className="list-disc list-inside text-[#2B2B2B] text-sm space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}

          {/* Timeline icons in center */}
          {experiences.map((exp, idx) => (
            <div
              key={`icon-${exp.id}`}
              className="md:col-span-1 hidden md:flex justify-center relative"
              aria-hidden="true"
            >
              <div className="flex flex-col items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2B2B2B] shadow-md">
                  <Briefcase className="text-white" size={18} />
                </span>
                <span className="mt-3 font-mono text-xs select-none whitespace-nowrap" style={{ color: '#2B2B2B' }}>
                  {exp.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline dates below cards */}
        <div className="mt-12 md:hidden space-y-8">
          {experiences.map((exp) => (
            <div
              key={`mobile-date-${exp.id}`}
              className="text-center font-mono text-sm"
              style={{ color: '#2B2B2B' }}
            >
              {exp.date}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

