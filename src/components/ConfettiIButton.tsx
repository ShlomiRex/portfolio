import confetti from "canvas-confetti";
import React from "react";

interface ConfettiButtonProps {
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

const ConfettiButton: React.FC<ConfettiButtonProps> = ({ icon, href, className = "" }) => {
  const handleClick = (e: React.MouseEvent) => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
    });
  };

  const commonClasses =
    `flex items-center justify-center transition-transform duration-300 hover:scale-125 ${className}`;

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={commonClasses}
    >
      {icon}
    </a>
  ) : (
    <button onClick={handleClick} className={commonClasses}>
      {icon}
    </button>
  );
};

export default ConfettiButton;
