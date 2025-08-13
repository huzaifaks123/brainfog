import { useState } from 'react';
import FAQAccordionItem from '../components/FAQAccordionItem';

const faqData = [
    {
        question: "What industries does BrainFog serve?",
        answer:
            "We work with a wide range of industries, including finance, retail, healthcare, and marketing, providing AI-driven solutions and strategic insights to drive growth and efficiency.",
    },
    {
        question: "Where are your offices located?",
        answer:
            "Our headquarters are at 206, Pareeni I, Veera Desai Road, Andheri West, Mumbai, India. We also have a collaboration hub at DIFC – Dubai AI Campus, Dubai, UAE.",
    },
    {
        question: "What kind of projects can I expect to work on at BrainFog?",
        answer:
            "Our projects range from developing AI/ML models (e.g., NLP, computer vision) to crafting data-driven marketing campaigns using trends like hyper-personalization and voice search. You’ll tackle real-world challenges with global impact.",
    },
    {
        question: "Does BrainFog offer remote work options?",
        answer:
            "Yes, we offer flexible work arrangements, including work-from-home options with prior notice, ensuring a balance between collaboration and flexibility.",
    },
    {
        question: "How can I stay updated on BrainFog’s events and insights?",
        answer:
            "Follow us on LinkedIn, and subscribe to our blog for the latest on tech trends, events like our AI/ML Hackathon, and more.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="pt-16 pb-16 md:pt-32 md:pb-32 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-[40px] text-center">
                    Frequently asked questions (FAQ's)
                </h2>
                <h2 className="text-4xl font-bold text-gray-900 mb-8"></h2>
                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Left: Email prompt */}
                    <div className="lg:w-1/3 bg-gradient-to-br from-gray-100 to-white py-4 px-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Still have a question?</h3>
                        <p className="text-gray-600 mb-4">
                            <br />
                            Can’t find the answer to your question?
                            We’re here to help!
                            If you need further assistance,
                            feel free to send us an email.
                            Our team is ready to assist you.
                            <br />
                            <br />
                            We’ll make sure to get back to you
                            as soon as possible.
                            <br />
                            <br />
                            Your satisfaction is our priority!
                        </p>
                        <a href="mailto:info@brainfogagency.com">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition">
                                Send email
                            </button>
                        </a>
                    </div>

                    {/* Right: FAQ accordion */}
                    <div className="lg:w-2/3 flex flex-1 flex-col gap-4">
                        {faqData.map((item, index) => (
                            <FAQAccordionItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isActive={activeIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
