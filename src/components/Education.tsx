
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educations = [
  {
    id: 'masters',
    degree: "Master's in Computer Science",
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Stevens_Institute_of_Technology_Seal.svg/1200px-Stevens_Institute_of_Technology_Seal.svg.png",
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
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f0/Parul_University_logo.png",
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
      <div className="container mx-auto px-6 lg:px-16 max-w-5xl text-[#2B2B2B]">
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
              className="bg-white rounded-lg p-6 shadow-lg text-[#2B2B2B] border border-[#e0e0e0]"
            >
              <div className="flex items-start gap-6">
                <img 
                  src={edu.logo} 
                  alt={`${edu.school} logo`} 
                  className="w-16 h-16 object-contain"
                />
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
