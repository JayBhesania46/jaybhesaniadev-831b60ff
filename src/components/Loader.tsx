
import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy">
      <div className="text-center">
        <div className="mb-4 relative w-12 h-12">
          <div className="absolute inset-0 border-t-2 border-b-2 border-green rounded-full animate-spin"></div>
          <div className="absolute inset-1 border-r-2 border-l-2 border-slate rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        </div>
        <p className="font-mono text-green text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
