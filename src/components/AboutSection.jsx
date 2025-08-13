import React from 'react';

const AboutSection = () => {
    return (
        <div className="container max-w-container mx-auto px-md text-center">
            <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl">
                About Us
            </h2>
            <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-6xl mx-auto leading-relaxed">
                BrainFog Agency is a dynamic technology company committed to revolutionizing industries through innovation in data science, AI-driven solutions, and marketing strategies. Headquartered Mumbai, India, we’re at the heart of a thriving tech ecosystem. Our collaboration hub at DIFC – Dubai AI Campus ensures a global perspective, connecting our teams across borders. We’re passionate about solving complex challenges—whether it’s optimizing workflows with AI or crafting hyper-personalized campaigns. Join us in pushing the boundaries of what’s possible.
            </p>
        </div>
    );
};

export default AboutSection;