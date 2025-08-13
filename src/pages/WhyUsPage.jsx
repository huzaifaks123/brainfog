import React from 'react';
import WhyUsSection from '../components/WhyUsSection';

const WhyUsPage = () => {
  return (
    <section className="pt-16 pb-16 md:pt-40 md:pb-20 section-padding"> {/* Added padding top for fixed header */}
      <WhyUsSection />
    </section>
  );
};

export default WhyUsPage;