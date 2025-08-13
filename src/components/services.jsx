import React, { useState } from 'react';
import ServiceAccordionItem from '../components/ServiceAccordionItem';
const servicesData = [
  {
    title: "APP & WEBSITE DEVELOPMENT",
    icon: "💻",
    headerColor: "text-service-1",
    contentBgColor: "bg-service-1",
    content: (
      <p>Create seamless, user-friendly digital experiences with our custom app and web development services. We build responsive websites and intuitive mobile apps that are perfectly aligned with your brand and designed to captivate and engage your target audience and ultimately driving business growth.</p>
    ),
  },
  {
    title: "AI & MACHINE LEARNING INNOVATION",
    headerColor: "text-service-2",
    contentBgColor: "bg-service-2",
    content: (
      <p>We design and deploy sophisticated AI/ML models to solve real-world challenges. Our team leverages frameworks like TensorFlow, PyTorch, and Hugging Face to build solutions such as natural language processing (NLP) for sentiment analysis, computer vision for automated quality inspection, and generative AI for synthetic data generation. We also focus on creating scalable AI pipelines that integrate seamlessly into production systems, ensuring businesses can harness predictive analytics for smarter decision-making.</p>
    ),
  },
  {
    title: "MARKETING STRATEGIES POWERED BY DATA",
    headerColor: "text-service-3",
    contentBgColor: "bg-service-3",
    content: (
      <p>We redefine marketing with data-driven strategies that resonate in 2025’s competitive landscape. Using AI, we enable hyper-personalized campaigns tailored to individual preferences, leveraging zero-party data and predictive analytics for maximum engagement. Our expertise includes optimizing for voice search (with 50% of searches now voice-based), crafting immersive AR/VR experiences, and using blockchain for transparent ad metrics. We help brands achieve up to 20% higher engagement by aligning campaigns with the latest trends.</p>
    ),
  },
  {
    title: "SOCIAL MEDIA MARKETING EXCELLENCE",
    headerColor: "text-service-4",
    contentBgColor: "bg-service-4",
    content: (
      <p>We craft impactful social media strategies that amplify brand presence and engagement. Our team leverages platforms like Instagram, LinkedIn, and TikTok to create targeted content, harnessing AI to analyze audience behavior and optimize posting schedules. We specialize in social commerce, enabling seamless in-app purchases—with 55% of shoppers buying via social platforms in 2025—and drive community engagement through interactive campaigns, increasing follower interaction rates by up to 25%.</p>
    ),
  },
  {
    title: "PAID ADS MARKETING PRECISION",
    headerColor: "text-service-5",
    contentBgColor: "bg-service-5",
    content: (
      <p>We maximize ROI through precision-driven paid advertising. Using AI-powered tools, we optimize campaigns across Google Ads, Meta Ads, and programmatic platforms, targeting high-intent audiences with dynamic ad creatives. Our strategies include A/B testing, lookalike audience targeting, and real-time bid adjustments, achieving up to 15% higher click-through rates. We also ensure transparency in ad spend, using data analytics to track performance and refine strategies for measurable growth.</p>
    ),
  },
  {
    title: "APP DEVELOPMENT",
    headerColor: "text-service-2",
    contentBgColor: "bg-service-2",
    content: (
      <p>We create intuitive and scalable mobile applications that enhance user experiences and drive business growth. Our team specializes in developing cross-platform apps using frameworks like React Native and Flutter, ensuring seamless performance on iOS and Android. From e-commerce apps with integrated AI chatbots to productivity tools with real-time data sync, we deliver solutions that are secure, user-friendly, and tailored to industry needs, helping businesses engage customers effectively.</p>
    ),
  },
  {
    title: "WEBSITE DEVELOPMENT",
    headerColor: "text-service-3",
    contentBgColor: "bg-service-3",
    content: (
      <p>We build responsive, high-performance websites that serve as powerful digital touchpoints. Using modern technologies like React, Next.js, and Tailwind CSS, we create visually stunning and SEO-optimized websites that adapt to all devices. Whether it’s a corporate site with integrated analytics or a dynamic e-commerce platform with secure payment gateways, our websites are designed to enhance user engagement and support business goals with robust backend systems.</p>
    ),
  },
  {
    title: "SEO & SEM",
    headerColor: "text-service-4",
    contentBgColor: "bg-service-4",
    content: (
      <p>We boost online visibility through strategic Search Engine Optimization (SEO) and Search Engine Marketing (SEM). Our SEO approach includes keyword research, on-page optimization, and link-building to improve organic rankings, driving up to 30% more traffic. In SEM, we manage paid search campaigns on Google Ads, using AI to optimize bids and target high-conversion keywords, achieving 20% better cost-per-click efficiency. Together, we ensure businesses rank higher and attract the right audience.</p>
    ),
  }
];


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="pt-16 pb-16 md:pt-32 md:pb-32 bg-backgroundMediumLight section-padding">
      <div className="container max-w-container mx-auto px-md">
        <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl text-center">
          What We Do
        </h2>
        <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-6xl mx-auto leading-relaxed text-center pb-32">
          At BrainFog Agency, we empower businesses to stay ahead in a rapidly evolving digital landscape by blending advanced technology with strategic insights. Our multidisciplinary team operates at the intersection of AI, marketing, and operational excellence, delivering transformative outcomes across industries. From startups to global enterprises, we deliver solutions that drive growth, efficiency, and impact. Here’s how we make an impact
        </p>
        <div className="max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceAccordionItem
              key={index}
              title={service.title}
              icon={service.icon}
              headerColor={service.headerColor}
              contentBgColor={service.contentBgColor}
              contentTextColor={service.contentTextColor}
              isActive={activeIndex === index}
              onClick={() => handleAccordionClick(index)}
            >
              {service.content}
            </ServiceAccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;