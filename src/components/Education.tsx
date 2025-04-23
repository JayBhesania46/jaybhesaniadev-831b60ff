
import { motion } from 'framer-motion';

const educations = [
  {
    id: 'masters',
    degree: "Master's in Computer Science",
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA",
    details: [
      "Major in Computer Science",
      "GPA: 3.7/4",
      "Graduated in 2024"
    ]
  },
  {
    id: 'bachelors',
    degree: "Bachelor's in Computer Science",
    school: "Parul University",
    location: "Vadodara, Gujarat, India",
    details: [
      "Major in Computer Science",
      "GPA: 3.3/4",
      "Graduated in 2021"
    ]
  }
];

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-black">
        <h2 className="text-3xl font-sans font-semibold mb-16 text-center">
          Education
        </h2>
        
        <div className="space-y-12">
          {educations.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#f4f4f4] rounded-lg p-6 shadow-sm text-black hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{edu.school}</h3>
                <p className="text-lg mb-2">{edu.degree}</p>
                <p className="text-gray-600 mb-4">{edu.location}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {edu.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
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

export default Education;
