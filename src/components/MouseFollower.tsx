import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MousePointer2 } from 'lucide-react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        rotate: isHovering ? 45 : 0,
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 0.001
      }}
    >
      <MousePointer2 
        className={`w-6 h-6 ${isHovering ? 'text-primary' : 'text-muted-foreground'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      />
    </motion.div>
  );
};

export default MouseFollower;