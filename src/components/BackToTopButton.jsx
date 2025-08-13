import React, { useState, useEffect } from 'react';

const BackToTopButton = ({ targetId }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTarget = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId) || document.documentElement || document.body;
    
    if (targetId && document.getElementById(targetId)) {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${targetId || 'hero'}`} // Fallback to #hero if no targetId, but better to use window.scrollTo
      onClick={scrollToTarget}
      className={`
        fixed bottom-md right-md bg-hero-accent-purple text-hero-text 
        w-11 h-11 rounded-full flex items-center justify-center 
        text-2xl no-underline shadow-md z-[999]
        transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-90'}
        hover:bg-hero-accent-orange hover:scale-110 hover:-translate-y-0.5
      `}
      aria-label="Scroll back to top"
    >
      ↑
    </a>
  );
};

export default BackToTopButton;