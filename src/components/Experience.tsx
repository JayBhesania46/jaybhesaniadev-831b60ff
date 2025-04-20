
import { Briefcase } from 'lucide-react';
import { motion } from "framer-motion";

const experiences = [
  {
    id: "stevens",
    title: "Graduate Teaching Assistant",
    company: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA",
    date: "Sep 2023 – May 2024",
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
    date: "Aug 2020 – Aug 2022",
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
    date: "Feb 2020 – Jul 2020",
    description: [
      "Assisted in developing web applications using HTML, CSS, JavaScript, and React.",
      "Participated in code reviews and implemented feedback to improve code quality.",
      "Worked with senior developers to learn best practices and improve technical skills.",
      "Contributed to database design and implementation using MongoDB."
    ]
  }
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-[#0f0f0f]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-16 text-green text-center">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className={`w-full md:w-1/2 p-6 rounded-lg shadow-lg bg-gray-900 text-white ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                  <h3 className="font-semibold text-xl mb-1">{exp.title}</h3>
                  <p className="text-green font-semibold mb-2">{exp.company}</p>
                  <p className="italic text-gray-400 mb-3">{exp.location}</p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Timeline icon and date */}
                <div className="absolute left-1/2 top-10 flex flex-col items-center -translate-x-1/2 md:static md:mx-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green shadow-lg">
                    <Briefcase className="text-black" size={20} />
                  </div>
                  <span className="mt-3 text-green font-mono text-sm whitespace-nowrap">{exp.date}</span>
                </div>

                {/* Empty flex for spacing */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
