import React from 'react';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <section className="pt-16 pb-16 md:pt-40 md:pb-20 bg-backgroundMediumLight section-padding"> {/* Added padding top for fixed header */}
      <AboutSection />
      {/* You can add more content specific to the About Us page here */}
    </section>
  );
};

export default AboutPage;