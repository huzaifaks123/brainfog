import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    let ctaShownThisSession = sessionStorage.getItem('ctaBannerClosed');
    if (ctaShownThisSession) {
        setIsClosed(true);
        return;
    }

    const handleScroll = () => {
      if (window.scrollY > 600 && !isClosed && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
    sessionStorage.setItem('ctaBannerClosed', 'true'); // Persist closed state for session
  };

  if (!isVisible || isClosed) {
    return null;
  }

  return (
    <div
      role="alertdialog"
      aria-labelledby="ctaBannerHeading"
      aria-describedby="ctaBannerDesc"
      className="fixed bottom-md left-md right-md sm:right-auto bg-hero-accent-orange text-hero-text p-sm sm:p-lg rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-sm animate-slideInUp z-[999]"
    >
      <div className="text-center sm:text-left">
        <strong id="ctaBannerHeading" className="block text-lg mb-1">Transform Your Digital Presence!</strong>
        <p id="ctaBannerDesc" className="text-sm">Ready to take your brand to the next level?</p>
      </div>
      <div className="flex items-center gap-sm">
        <Link
            to="/contact"
            className="bg-hero-text text-hero-bg py-xs px-md rounded-pill font-bold text-xs sm:text-sm whitespace-nowrap transition-colors duration-300 hover:bg-hero-accent-purple hover:text-hero-text"
        >
            Get a Free Quote
        </Link>
        <button
            onClick={handleClose}
            className="bg-none border-none text-hero-text text-2xl leading-none cursor-pointer p-1 opacity-80 hover:opacity-100 transition-opacity"
            aria-label="Close promotional banner"
        >
            ×
        </button>
      </div>
    </div>
  );
};

export default CTABanner;