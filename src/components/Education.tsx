
const Education = () => {
  return (
    <section id="education" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-12">
          <div className="experience-item">
            <h3 className="text-xl font-semibold text-slate-lightest mb-1">Master's in Computer Science</h3>
            <p className="text-green mb-2">Stevens Institute of Technology</p>
            <p className="text-slate mb-4">Hoboken, NJ, USA</p>
            <div className="flex items-center text-sm text-slate-light">
              <span className="font-mono">2022 - 2024</span>
            </div>
          </div>
          
          <div className="experience-item">
            <h3 className="text-xl font-semibold text-slate-lightest mb-1">Bachelor's in Computer Science</h3>
            <p className="text-green mb-2">Parul University</p>
            <p className="text-slate mb-4">Vadodara, Gujarat, India</p>
            <div className="flex items-center text-sm text-slate-light">
              <span className="font-mono">2016 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
