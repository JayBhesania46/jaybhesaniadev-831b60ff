
import { Briefcase } from 'lucide-react';

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
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-transparent">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-center text-3xl font-semibold mb-16 text-gray-900 dark:text-gray-100">My Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 h-full hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center md:items-start">
                  {/* Content box */}
                  <div
                    className={`w-full md:w-1/2 p-6 rounded-lg bg-white shadow-md dark:bg-gray-800 
                    ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}
                    style={{ zIndex: 1 }}
                  >
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {exp.title}
                    </h3>
                    <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-3">{exp.location}</p>
                    <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-2 list-inside list-disc">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Center timeline icon and date */}
                  <div className="absolute left-1/2 top-10 flex flex-col items-center -translate-x-1/2 md:static md:mx-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
                      <Briefcase className="text-gray-700 dark:text-gray-400" size={20} />
                    </div>
                    <span className="mt-3 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">{exp.date}</span>
                  </div>

                  {/* Empty flex item for spacing on the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
