import React from 'react';
import WhyUsCard from './WhyUsCard';

const WhyUsSection = () => {
  return (
    <div className="container max-w-container mx-auto px-md">
      <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl text-center">
        Why Choose Us
      </h2>
      <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-6xl mx-auto mb-xl leading-relaxed text-center">
        We deliver innovative, tailored solutions that drive measurable results and set your brand apart.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl gap-lg mt-xl">
        <WhyUsCard title="Innovative Solutions" accentColor="border-hero-accent-orange">
          We leverage cutting-edge technology and creative thinking to craft impactful digital experiences that resonate with your audience.
        </WhyUsCard>
        <WhyUsCard title="Tailored Strategies" accentColor="border-hero-accent-purple">
          Our solutions are meticulously customized to meet your unique business needs, ensuring relevance and maximum effectiveness.
        </WhyUsCard>
        <WhyUsCard title="Proven Results" accentColor="border-service-3">
          With data-driven approaches and a focus on ROI, we are committed to delivering tangible success and sustainable growth for your business.
        </WhyUsCard>
      </div>
    </div>
  );
};

export default WhyUsSection;