import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import shape_purple from "../assets/hero-elements/shape-purple.png";
import rocket from "../assets/hero-elements/rocket.png";
import robot from "../assets/hero-elements/robot.png";
import star_orange from "../assets/hero-elements/star-orange.png";
import star_yellow from "../assets/hero-elements/star-yellow.png";

// Floating animation CSS class
const floatAnimation = `animate-float ease-in-out infinite`;

const HeroVisualImage = ({ src, alt, top, left, right, bottom, rotate, delay, sizeClass = 'w-16 h-16', className = '', translateClass = '', onLoad }) => {
    const style = {
        '--initial-rotate': rotate || '0deg',
        animationDelay: delay || '0s',
        top,
        left,
        right,
        bottom,
    };

    return (
        <div className={`absolute ${translateClass}`} style={style} aria-hidden="true">
            <img
                src={src}
                alt={alt}
                className={`${floatAnimation} ${sizeClass} ${className}`}
                draggable={false}
                onLoad={onLoad} // Trigger the onLoad when the image is fully loaded
            />
        </div>
    );
};

const Hero = () => {
    const currentYear = new Date().getFullYear();
    const [navbarHeight, setNavbarHeight] = useState(0); // Track the height of the navbar
    const [loading, setLoading] = useState(5); // Track how many images are loading

    // Calculate navbar height dynamically
    useEffect(() => {
        const navbar = document.getElementById('navbar'); // assuming your navbar has an ID 'navbar'
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight); // Set the height of the navbar
        }

        const handleResize = () => {
            if (navbar) {
                setNavbarHeight(navbar.offsetHeight); // Update on resize
            }
        };

        window.addEventListener('resize', handleResize); // Add resize listener
        return () => window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    }, []);

    // Handle when each image is loaded
    const handleImageLoad = () => {
        setLoading((prevState) => prevState - 1); // Decrease loading counter
    };

    // Ensure that the Hero section doesn't overlap the navbar on page load
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on reload
    }, []);

    return (
        <section
            id="hero"
            className="bg-hero-bg text-hero-text text-center relative overflow-hidden min-h-[700px] hero-bottom-shape"
            style={{
                paddingTop: `${navbarHeight + 80}px`, // Adjust top padding based on navbar height
                zIndex: 10, // Ensure the Hero section is above the navbar
            }}
        >
            {/* Loader */}
            {loading > 0 && (
                <div className="absolute inset-0 bg-hero-bg flex justify-center items-center z-[999]">
                    <div className="w-12 h-12 border-4 border-t-4 border-hero-accent-orange border-solid rounded-full animate-spin"></div>
                </div>
            )}

            <div className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none" aria-hidden="true">
                {/* Using your provided images with floating animations and positioning */}
                <HeroVisualImage
                    src={robot}
                    alt="Robot Icon"
                    top="15%"
                    left="3%"
                    rotate="-10deg"
                    delay="0s"
                    sizeClass="w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56"
                    onLoad={handleImageLoad}
                />
                <HeroVisualImage
                    src={shape_purple}
                    alt="Abstract Purple Shape"
                    top="50%"
                    left="50%"
                    translateClass="-translate-x-1/2 -translate-y-1/2"
                    className="opacity-80 scale-[1.8]"
                    delay="-2s"
                    sizeClass="w-[40vw] h-[50vw]"
                    onLoad={handleImageLoad}
                />

                <HeroVisualImage
                    src={star_orange}
                    alt="Orange Star Icon"
                    top="15%"
                    right="8%"
                    rotate="15deg"
                    delay="-4s"
                    sizeClass="w-20 h-20 sm:w-24 sm:h-32 md:w-32 md:h-40"
                    onLoad={handleImageLoad}
                />
                <HeroVisualImage
                    src={star_yellow}
                    alt="Yellow Star Icon"
                    bottom="15%"
                    left="18%"
                    sizeClass="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-40"
                    delay="-3s"
                    onLoad={handleImageLoad}
                />
                <HeroVisualImage
                    src={rocket}
                    alt="Rocket Icon"
                    top="50%"
                    right="8%"
                    rotate="0deg"
                    delay="-1s"
                    sizeClass="w-12 h-12 sm:w-40 sm:h-40 md:w-56 md:h-56"
                    onLoad={handleImageLoad}
                />
            </div>

            <div className="container max-w-container mx-auto px-md relative z-[2]">
                <h1 className="font-title font-extrabold leading-relaxed mb-lg max-w-[1100px] mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem]" style={{ lineHeight: '1.7' }}>
                    <span className="block">SHAPING THE FUTURE</span>
                    <span className="block">
                        OF <span className="text-hero-accent-orange">DIGITAL</span>{' '}
                        <span className="text-hero-accent-purple">INNOVATION.</span>
                    </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-[1.15rem] max-w-[680px] mx-auto mb-xl font-normal leading-relaxed text-gray-200">
                    Transform your digital presence with Brainfog. We craft cutting-edge websites, intuitive apps and impactful campaigns
                    that captivate audiences and drive unparalleled results.
                </p>
                <Link
                    to="/contact"
                    className="bg-hero-accent-orange text-hero-text py-3.5 px-xl rounded-pill font-bold text-base sm:text-lg transition-all duration-300 ease-in-out inline-block shadow-hero-cta hover:bg-hero-accent-purple hover:-translate-y-1 hover:scale-105 hover:shadow-hero-cta-hover"
                >
                    Get Started
                </Link>
            </div>

            {/* Additional styles for floating animation */}
            <style>
                {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(var(--initial-rotate));
          }
          50% {
            transform: translateY(-10px) rotate(var(--initial-rotate));
          }
        }
        .animate-float {
          animation-name: float;
          animation-duration: 6s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}
            </style>
        </section>
    );
};

export default Hero;
