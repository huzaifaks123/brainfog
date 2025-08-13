import React from 'react';
import ContactForm from '../components/ContactForm';

const Contacts = () => {
  return (
    <section
      id="contact"
      className="pt-16 pb-16 md:pt-40 md:pb-20 text-hero-text section-padding"
      style={{ background: 'linear-gradient(135deg, #0A1931 0%, #081427 100%)' }} // --color-hero-bg and --color-hero-bg-darker
    >
      <div className="container max-w-container mx-auto px-md">
        <h2 className="font-title font-extrabold text-3xl sm:text-4xl lg:text-[2.8rem] mb-md text-center text-hero-text">
          Get in Touch
        </h2>
        <p className="text-base sm:text-lg lg:text-[1.1rem] text-gray-300 max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
          Ready to elevate your digital presence and achieve remarkable results? Let’s collaborate and create something extraordinary together. Contact us today!
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contacts;