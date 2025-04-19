
import { GitHub, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-[#0b101d] relative overflow-hidden px-4 text-white text-center">
      {/* Background constellation pattern can be added here later */}

      <div className="max-w-3xl">
        {/* Avatar with wave emoji */}
        <div className="relative mx-auto mb-6 w-[96px] h-[96px] rounded-full border-4 border-white overflow-hidden">
          <img
            src="/lovable-uploads/e678c3bb-c40c-4df1-8039-904e50108c6a.png"
            alt="Ben's Avatar"
            className="w-full h-full object-cover"
          />
          <span
            aria-label="waving hand emoji"
            role="img"
            className="absolute bottom-0 right-0 -mb-2 -mr-2 text-3xl animate-wave"
            style={{ animationTimingFunction: "linear", animationIterationCount: "infinite", animationDuration: "3s" }}
          >
            👋
          </span>
        </div>

        {/* Intro text with styles */}
        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug max-w-[28rem] mx-auto">
          Hello, I'm <strong>Ben</strong>. I'm a <strong>software engineer</strong> at{' '}
          <a href="https://humanforce.com" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-green-400 transition-colors">
            Humanforce
          </a>{' '}
          in the platform team. I'm currently working with Laravel, React.js, Node.js, GraphQL, and AWS.
        </h1>

        {/* Buttons for GitHub and LinkedIn */}
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/ben"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-md transition hover:bg-gray-200"
          >
            <GitHub size={20} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ben"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 border border-gray-700 text-gray-300 font-semibold shadow-md transition hover:bg-gray-800 hover:text-white"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Wave hand keyframes animation */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          15% { transform: rotate(14.0deg) }
          30% { transform: rotate(-8.0deg) }
          40% { transform: rotate(14.0deg) }
          50% { transform: rotate(-4.0deg) }
          60% { transform: rotate(10.0deg) }
          70% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
        .animate-wave {
          animation-name: wave;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
