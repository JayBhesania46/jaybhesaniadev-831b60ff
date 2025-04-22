
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    id: 'masters',
    degree: "Master's in Computer Science",
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA"
  },
  {
    id: 'bachelors',
    degree: "Bachelor's in Computer Science",
    school: "Parul University",
    location: "Vadodara, Gujarat, India"
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
      className="py-20 bg-[#f5f5f5]"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-[#2B2B2B]">
        <h2 className="text-3xl font-spaceGrotesk font-semibold mb-16 text-[#2B2B2B] text-center">
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
              className="bg-white rounded-lg p-6 shadow-lg text-[#2B2B2B] border border-[#e0e0e0]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#2B2B2B] rounded-full p-3 mt-1">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{edu.school}, {edu.location} — {edu.degree}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
