import { useState } from 'react';

function PlusMinusToggle() {
  const [isActive, setIsActive] = useState(false);
  
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  
  return (
    <div 
      className="relative w-3 h-3 mr-[0.5px] flex items-center justify-center"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Container for better alignment */}
      <div className="relative w-2 h-2">
        {/* Horizontal line (minus) */}
        <span className="absolute left-0 right-0 top-1/2 h-px bg-zinc-400 -translate-y-1/2"></span>
        
        {/* Vertical line (makes it a plus) */}
        <span 
          className={`absolute top-0 bottom-0 left-1/2 w-px bg-zinc-400 -translate-x-1/2 transition-transform duration-300 group-data-expanded:rotate-90
          }`}
        ></span>
      </div>
    </div>
  );
}

export default PlusMinusToggle;