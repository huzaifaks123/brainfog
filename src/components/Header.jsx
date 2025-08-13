import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BrainFogLogo from '../assets/BrainFogLogoSmall.png'; // Assuming you have a logo image

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuRef = useRef(null);  // Ref for the mobile menu
    const hamburgerRef = useRef(null); // Ref for the hamburger button
    const headerRef = useRef(null); // Ref for the header element

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close the menu only if the click happens outside the header element
            if (
                headerRef.current && !headerRef.current.contains(event.target) &&
                hamburgerRef.current && !hamburgerRef.current.contains(event.target) &&
                menuRef.current && !menuRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside); // Listen for click events
        return () => document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
    }, []);

    const handleNavClick = () => {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
    };

    return (
        <header
            id='navbar'  // ID for the header element
            ref={headerRef}  // Reference to the header element
            className={`bg-hero-bg py-sm fixed w-full top-0 left-0 z-[1000] shadow-md transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-none'}`}
        >
            <div className="container max-w-container mx-auto px-md flex flex-col lg:flex-row justify-between items-center">
                {/* Logo and Hamburger */}
                <div className="flex justify-between items-center w-full lg:w-auto">
                    <Link to="/" className="font-title text-3xl font-extrabold text-hero-text flex items-center" aria-label="Brainfog Home">
                        <img
                            src={BrainFogLogo}
                            alt="BrainFog Logo"
                            className="h-8 w-auto"
                        />
                    </Link>


                    {/* Hamburger button visible below lg */}
                    <button
                        ref={hamburgerRef}
                        className="lg:hidden text-hero-text text-2xl focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav
                    ref={menuRef}
                    className={`flex-col lg:flex-row items-center gap-6 lg:gap-10 text-center lg:text-left lg:w-auto mt-8 lg:mt-0
                    ${isMobileMenuOpen ? 'flex' : 'hidden'} lg:flex`}
                >
                    <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-10 text-base font-medium text-hero-text">
                        {[
                            { label: 'Home', href: '/#home' },
                            { label: 'About Us', href: '/#about' },
                            { label: 'Why Us', href: '/#why-us' },
                            { label: 'Services', href: '/#services' },
                            { label: 'Portfolio', href: '/ourportfolio' },
                            { label: 'Blogs', href: '/blog' },
                            { label: 'Join Us', href: '/join-us' },
                            { label: 'Contact Us', href: '/contact', isButton: true },
                        ].map(({ label, href, isButton }) => (
                            <li key={label}>
                                {isButton ? (
                                    <a
                                        href={href}
                                        className="bg-hero-text text-hero-bg py-2.5 px-6 rounded-full font-bold text-sm transition-all duration-300 ease-in-out hover:bg-hero-accent-orange hover:text-hero-text inline-block"
                                        onClick={handleNavClick}
                                    >
                                        {label}
                                    </a>
                                ) : (
                                    <a
                                        href={href}
                                        className="text-hero-text transition-all duration-300 ease-in-out hover:text-hero-accent-orange relative inline-block group py-2"
                                        onClick={handleNavClick}
                                    >
                                        {label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-hero-accent-orange transition-all duration-300 ease-out group-hover:w-full"></span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
