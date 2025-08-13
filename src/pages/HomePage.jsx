import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import WhyUsSection from '../components/WhyUsSection';
import Services from '../components/services';
import Portfolio from '../components/portfolio';
import Team from '../components/Team';
import TestimonialSlider from '../components/TestimonialSlider';
import JoinUs from '../components/JoinUs';
import Contacts from '../components/Contacts';
import Blogs from '../components/Blogs';
import FAQSection from '../components/FAQSection';
// You can choose to include more sections on the home page or keep it lean.
// For this example, I'll include About and Why Us.

const HomePage = () => {
    return (
        <>
            <div id='home'>
                <Hero />
            </div>
            <div id='about' className="section-padding border-b border-borderLight bg-backgroundMediumLight py-32">
                <AboutSection />
            </div>
            <div id='why-us' className="section-padding border-b border-borderLight py-32">
                <WhyUsSection />
            </div>
            <div id='services' className="section-padding border-b border-borderLight bg-backgroundMediumLight">
                <Services />
            </div>
            {/* <div id='portfolio' className="section-padding border-b border-borderLight">
                <Portfolio />
            </div> */}
            <div id='Team' className="section-padding border-b border-borderLight bg-backgroundMediumLight">
                <FAQSection />
            </div>
            
            <div id='TestimonialSlider' className="section-padding border-b border-borderLight">
                <TestimonialSlider />
            </div>
            {/* <div id='join-us' className="section-padding border-b border-borderLight bg-backgroundMediumLight">
                <JoinUs />
            </div> */}
            {/* <div id='contact' className="section-padding border-b border-borderLight">
                <Contacts />
            </div>
            <div id='blogs' className="section-padding border-b border-borderLight bg-backgroundMediumLight">
                <Blogs />
            </div> */}
        </>
    );
};

export default HomePage;