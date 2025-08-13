import React, { useState } from 'react';
import ServiceAccordionItem from '../components/ServiceAccordionItem';
import Services from '../components/services';


const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Services />
  );
};

export default ServicesPage;