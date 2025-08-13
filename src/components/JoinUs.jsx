import React from 'react';
import Slider from 'react-slick';
import JoinTeamJobCard from '../components/JoinTeamJobCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const jobList = [
  {
    title: "AI/ML Developer (Full-Time)",
    location: "Work From Office",
    description: `The AI/ML Engineer will be responsible for designing, developing, and deploying AI
solutions that harness machine learning techniques to solve complex problems and drive
innovation across diverse industries.`,
    applyLink: "/contact",
    skills: [
      "Degree in CS, AI, ML, or related field.",
      "Proficient in Python and ML frameworks (TensorFlow, PyTorch).",
      "Strong in algorithms, data structures, and statistics.",
      "Experience with data processing and cloud platforms.",
      "Excellent analytical and communication skills."
    ]

  },
  {
    title: "Full Stack Developer",
    location: "Work From Office",
    description: `Are you ready to build high-performance, real-time applications using a modern development stack? Join Brainfog Agency and make a real impact by developing scalable, user-centric web and mobile applications.`,
    applyLink: "/contact",
    skills: [
      "3–6 years of full-stack development experience.",
      "Proficient in React.js, Next.js, Redux Toolkit, and React Native (Expo).",
      "Strong backend skills with Node.js and Prisma ORM.",
      "Solid knowledge of MySQL and scalable DB design.",
      "Experienced in RESTful APIs and debugging systems.",
      "Familiar with Git and Agile workflows."
    ]

  },
];

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

// const NextArrow = ({ onClick }) => (
//   <div
//     className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-3xl text-gray-600 hover:text-black 
//                rounded-full bg-white/60 backdrop-blur-sm shadow-md hover:bg-white transition-colors duration-200"
//     onClick={onClick}
//   >
//     <MdKeyboardArrowRight />
//   </div>
// );


// const PrevArrow = ({ onClick }) => (
//   <div
//     className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 cursor-pointer text-3xl text-gray-600 hover:text-black 
//                rounded-full bg-white/60 backdrop-blur-sm shadow-md hover:bg-white transition-colors duration-200"
//     onClick={onClick}
//   >
//     <MdKeyboardArrowLeft />
//   </div>
// );



const JoinUs = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };



  return (
    <section id="join-team" className="pt-16 pb-16 md:pt-32 md:pb-32 bg-backgroundLight section-padding">
      <div className="container max-w-container mx-auto px-md px-xl rounded-lg">

        {/* Centered Top Heading */}
        <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-10 text-center" style={{ lineHeight: '1.2' }}>
          Join Us
        </h2>

        {/* Top Left & Right */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <div className="lg:w-1/2">
            <h4 className='font-title font-extrabold text-textDark text-xl sm:text-2xl lg:text-[1.5rem] mb-md'>
              Why Join BrainFog?
            </h4>
            <p className="text-lg text-textMedium mb-md leading-relaxed">
              At BrainFog, you’ll work on projects that shape industries—from scalable AI pipelines to groundbreaking marketing campaigns. Our Mumbai and Dubai offices offer a global stage for innovation.
            </p>
          </div>

          <div className="lg:w-1/2">
            <h4 className='font-title font-extrabold text-textDark text-xl sm:text-2xl lg:text-[1.5rem] mb-md'>
              Our Culture
            </h4>
            <p className="text-lg text-textMedium mb-md leading-relaxed">
              We foster a collaborative, inclusive environment where curiosity thrives. Expect hackathons, upskilling sessions (e.g., TensorFlow, PyTorch), and flexible work options.
            </p>
          </div>
        </div>

        {/* Bottom Left & Right */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* How to Apply (left) */}
          <div className="lg:w-1/2">
            <h4 className='font-title font-extrabold text-textDark text-md sm:text-2xl lg:text-[1.1rem] mb-md'>
              How to Apply<br />Ready to join the BrainFog journey? Follow these steps
            </h4>
            <p className="text-lg text-textMedium mb-md leading-relaxed">
              1. Prepare your resume and a cover letter highlighting your passion for tech, marketing, or operations.<br />
              2. Email your application to <strong>info@brainfogagency.com</strong>, with the role in the subject line (e.g., “AI/ML Developer Application”).<br />
              3. Our team will review your application and reach out within 5–7 business days for next steps, which may include a technical assessment or interview. We’re excited to see how you’ll contribute to shaping the future with us!
            </p>
          </div>

          {/* Job Cards Carousel (right) */}
          <div className="lg:w-1/2 relative">
            <Slider {...sliderSettings}>
              {jobList.map((job, index) => (
                <div key={index} className="lg:h-[25rem] px-2">
                  <JoinTeamJobCard {...job} />
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUs;
