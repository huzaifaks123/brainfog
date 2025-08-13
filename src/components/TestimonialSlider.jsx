// import React, { useState, useEffect, useRef } from 'react';
// import TestimonialCard from './TestimonialCard';

// const testimonialsData = [
//     { author: "SAMVIDHA SINGH, CEO, TGC LABS LLC", title: "Dubai, UAE - Transformed Complex Ideas", quote: "Brainfog Agency masterfully turned our complex ideas into stunning, functional realities. Their meticulous attention to detail, innovative mindset, and unwavering commitment to excellence were truly exceptional and pivotal to our project's success." },
//     { author: "ANITA VERMA, MARKETING HEAD, INNOVATE CORP", title: "Mumbai, India - Boosted Online Presence", quote: "The digital marketing strategies implemented by Brainfog completely transformed our brand’s online presence. Their team delivered highly creative and remarkably effective campaigns that significantly increased our engagement and market reach." },
//     { author: "RAJ MEHTA, FOUNDER, TECHSTART SOLUTIONS", title: "Delhi, India - Seamless Website Delivery", quote: "The Brainfog team delivered an absolutely seamless and visually impressive website that perfectly captured our vision and brand ethos. Their professionalism and technical expertise made the entire process smooth and enjoyable." },
// ];

// const TestimonialSlider = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const trackRef = useRef(null);
//     const slideWidthRef = useRef(0);

//     const goToSlide = (index) => {
//         let newIndex = index;
//         if (index < 0) {
//             newIndex = testimonialsData.length - 1;
//         } else if (index >= testimonialsData.length) {
//             newIndex = 0;
//         }
//         setCurrentIndex(newIndex);
//     };

//     useEffect(() => {
//         const calculateSlideWidth = () => {
//             if (trackRef.current && trackRef.current.firstChild) {
//                 slideWidthRef.current = trackRef.current.firstChild.getBoundingClientRect().width;
//             }
//         };

//         calculateSlideWidth(); // Initial calculation
//         window.addEventListener('resize', calculateSlideWidth);

//         return () => window.removeEventListener('resize', calculateSlideWidth);
//     }, []);

//     useEffect(() => {
//         if (trackRef.current) {
//             trackRef.current.style.transform = `translateX(-${currentIndex * slideWidthRef.current}px)`;
//         }
//     }, [currentIndex, slideWidthRef.current]);


//     return (
//         <section id="testimonials" className="bg-testimonial-bg text-testimonial-text section-padding">
//             <div className="container max-w-container mx-auto px-md py-40">
//                 <h2 className="font-title font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] mb-md text-center text-testimonial-text">
//                     Client Testimonials
//                 </h2>
//                 <p className="text-base sm:text-lg lg:text-[1.1rem] text-gray-300 max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
//                     Hear what our valued partners have to say about their experience working with Brainfog.
//                 </p>
//                 <div className="relative max-w-[800px] mx-auto overflow-hidden">
//                     <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
//                         {testimonialsData.map((testimonial, index) => (
//                             <TestimonialCard key={index} {...testimonial} />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="text-center mt-lg">
//                     <button
//                         onClick={() => goToSlide(currentIndex - 1)}
//                         aria-label="Previous testimonial"
//                         className="bg-transparent border-2 border-hero-text text-hero-text text-2xl p-2 mx-2.5 rounded-full w-11 h-11 inline-flex items-center justify-center leading-none transition-all duration-300 hover:bg-hero-text hover:text-testimonial-bg hover:scale-110"
//                     >
//                         ‹
//                     </button>
//                     <button
//                         onClick={() => goToSlide(currentIndex + 1)}
//                         aria-label="Next testimonial"
//                         className="bg-transparent border-2 border-hero-text text-hero-text text-2xl p-2 mx-2.5 rounded-full w-11 h-11 inline-flex items-center justify-center leading-none transition-all duration-300 hover:bg-hero-text hover:text-testimonial-bg hover:scale-110"
//                     >
//                         ›
//                     </button>
//                 </div>
//                 <div className="flex justify-center mt-md">
//                     {testimonialsData.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             aria-label={`Go to slide ${index + 1}`}
//                             className={`w-3 h-3 rounded-full mx-1.5 cursor-pointer transition-all duration-300 
//                           ${currentIndex === index ? 'bg-hero-accent-orange scale-125' : 'bg-gray-500'}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default TestimonialSlider;
// // This component can be used directly in a page or imported into HomePage
// // For example, in HomePage.jsx:
// // import TestimonialSlider from '../components/TestimonialSlider';
// // ...
// // <TestimonialSlider />

import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from './TestimonialCard';

const testimonialsData = [
    {
        author: "SAMVIDHA SINGH, CEO, TGC LABS LLC",
        title: "Dubai, UAE - Transformed Complex Ideas",
        quote:
            "BrainFog Agency turned our complex ideas into stunning realities. Their attention to detail, innovative mindset, and commitment to excellence made them an indispensable part of our journey. Highly recommended!",
    },
    {
        author: "SHREMOHAN CHAUHAAN, FOUNDER & CxO, NUQI WEALTH",
        title: "India - Scaled Digital Presence",
        quote:
            "BrainFog Agency transformed our digital presence. From design to execution, their team delivered beyond expectations. They understood our vision and crafted solutions that helped us scale effortlessly.",
    },
    {
        author: "IMRAN FAROOQUI, CEO, NUQI GOLD",
        title: "Dubai, UAE - Game-Changing Development",
        quote:
            "Working with BrainFog Agency was a game-changer for us. Their innovative approach and seamless app development helped us create an intuitive platform that resonates with our global audience. Their expertise is unmatched!",
    },
    {
        author: "AAMIR FAROOQUI, DIRECTOR, AIZA PHARMA",
        title: "Burundi, Africa - Vision to Reality",
        quote:
            "BrainFog Agency turned our complex ideas into stunning realities. Their attention to detail, innovative mindset, and commitment to excellence made them an indispensable part of our journey. Highly recommended!",
    },
];


const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);
    const slideWidthRef = useRef(0);

    const goToSlide = (index) => {
        let newIndex = index;
        if (index < 0) {
            newIndex = testimonialsData.length - 1; // Wrap to the last testimonial
        } else if (index >= testimonialsData.length) {
            newIndex = 0; // Wrap to the first testimonial
        }
        setCurrentIndex(newIndex);
    };

    // Set up automatic sliding every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToSlide(currentIndex + 1); // Move to the next slide
        }, 5000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentIndex]); // Runs whenever currentIndex changes

    // Calculate slide width for proper translation on window resize
    useEffect(() => {
        const calculateSlideWidth = () => {
            if (trackRef.current && trackRef.current.firstChild) {
                slideWidthRef.current = trackRef.current.firstChild.getBoundingClientRect().width;
            }
        };

        calculateSlideWidth(); // Initial calculation
        window.addEventListener('resize', calculateSlideWidth); // Recalculate on resize

        return () => window.removeEventListener('resize', calculateSlideWidth);
    }, []);

    // Apply slide translation
    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(-${currentIndex * slideWidthRef.current}px)`;
        }
    }, [currentIndex]); // Recalculate on currentIndex change

    return (
        <section id="testimonials" className="bg-testimonial-bg text-testimonial-text section-padding">
            <div className="container max-w-container mx-auto px-md py-32">
                <h2 className="font-title font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] mb-[40px] text-center text-testimonial-text">
                    Client Testimonials
                </h2>
                <p className="text-base sm:text-lg lg:text-[1.1rem] text-gray-300 max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
                    Hear what our valued partners have to say about their experience working with Brainfog.
                </p>
                <div className="relative max-w-[800px] mx-auto overflow-hidden">
                    <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
                        {testimonialsData.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
                <div className="text-center mt-lg">
                    <button
                        onClick={() => goToSlide(currentIndex - 1)}
                        aria-label="Previous testimonial"
                        className="bg-transparent border-2 border-hero-text text-hero-text text-2xl p-2 mx-2.5 rounded-full w-11 h-11 inline-flex items-center justify-center leading-none transition-all duration-300 hover:bg-hero-text hover:text-testimonial-bg hover:scale-110"
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => goToSlide(currentIndex + 1)}
                        aria-label="Next testimonial"
                        className="bg-transparent border-2 border-hero-text text-hero-text text-2xl p-2 mx-2.5 rounded-full w-11 h-11 inline-flex items-center justify-center leading-none transition-all duration-300 hover:bg-hero-text hover:text-testimonial-bg hover:scale-110"
                    >
                        ›
                    </button>
                </div>
                <div className="flex justify-center mt-md">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`w-3 h-3 rounded-full mx-1.5 cursor-pointer transition-all duration-300 
                          ${currentIndex === index ? 'bg-hero-accent-orange scale-125' : 'bg-gray-500'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
