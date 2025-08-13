import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import makeinindia from '../assets/makeinindia.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleNewsletterSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch('https://api.brainfogagency.com/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: newsletterEmail, name: 'Newsletter Subscriber', message: 'Subscribe me to the newsletter' }),
            });

            if (res.ok) {
                setStatus('success');
                setNewsletterEmail('');
            } else {
                throw new Error('Failed to subscribe');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    const Spinner = () => (
        <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
        </svg>
    );

    return (
        <footer className="bg-hero-bg text-gray-300 py-xxl px-md">
            <div className="container max-w-container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mb-xl">
                    {/* Column 1 */}
                    <div className="footer-column">
                        <h3 className="text-xl font-title mb-md text-textLight">What We Look for in Partners</h3>
                        <p className="text-sm leading-relaxed">
                            We’re eager to collaborate with businesses and innovators who share our passion for technology and growth. Whether you’re a startup seeking AI solutions, a brand aiming to leverage marketing trends, or a tech enthusiast with bold ideas, we value partners who prioritize innovation, sustainability, and impact. Let’s work together to create solutions that transform industries and drive success.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="footer-column">
                        <h3 className="text-xl font-title mb-md text-textLight">Quick Links</h3>
                        <Link to="/#services" className="block text-sm mb-sm hover:text-hero-accent-orange hover:pl-1.5 transition-all duration-300">Our Services</Link>
                        <Link to="/blog" className="block text-sm mb-sm hover:text-hero-accent-orange hover:pl-1.5 transition-all duration-300">Blog & Insights</Link>
                        <Link to="/contact" className="block text-sm mb-sm hover:text-hero-accent-orange hover:pl-1.5 transition-all duration-300">Contact Us</Link>
                        <Link to="/ourportfolio" className="block text-sm mb-sm hover:text-hero-accent-orange hover:pl-1.5 transition-all duration-300">Portfolio</Link>
                    </div>

                    {/* Column 3 */}
                    <div className="footer-column">
                        <h3 className="text-xl font-title mb-md text-textLight">Contact Us</h3>
                        <p className="text-sm mb-sm">Email: <a href="mailto:info@brainfogagency.com" className="hover:text-hero-accent-orange transition-colors">info@brainfogagency.com</a></p>
                        <p className="text-sm mb-sm">Phone: <a href="tel:+917045340693" className="hover:text-hero-accent-orange transition-colors">+91 704 534 0693</a></p>
                        <p className="text-sm mb-sm">Mumbai Office: 206, Pareeni I, Veera Desai Road, Andheri West, Mumbai, India</p>
                        <p className="text-sm mb-sm">Dubai Office: DIFC – Dubai AI Campus, Dubai, UAE</p>
                    </div>

                    {/* Column 4 - Newsletter */}
                    <div className="footer-column">
                        <h3 className="text-xl font-title mb-md text-textLight">Newsletter</h3>
                        <p className="text-sm mb-md">Subscribe to get our latest updates and insights directly in your inbox.</p>
                        <form className="flex gap-xs" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                name="newsletter_email"
                                placeholder="Your Email Address"
                                required
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                aria-label="Email for newsletter"
                                className="flex-1 p-3 border border-gray-600 rounded-sm bg-gray-700 text-textLight placeholder-gray-400 focus:border-hero-accent-orange focus:ring-hero-accent-orange"
                            />
                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex items-center justify-center gap-2 bg-hero-accent-orange text-textLight py-3 px-md rounded-sm font-bold hover:bg-hero-accent-purple transition-colors ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        <Spinner />
                                        Subscribing...
                                    </>
                                ) : (
                                    'Subscribe'
                                )}
                            </button>
                        </form>
                        {status === 'success' && <p className="text-green-500 text-sm mt-sm">Thanks for subscribing!</p>}
                        {status === 'error' && <p className="text-red-500 text-sm mt-sm">Something went wrong. Please try again.</p>}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center pt-xs border-t border-gray-700 text-sm">
                    <div className="relative w-full">
                        <p className="flex items-center justify-center gap-1">
                            COPYRIGHT @2024 BY Brainfog Agency LLP.<br /> All rights reserved. Crafted in India.
                        </p>
                    </div>

                    <div className="social-links mt-sm flex justify-between">
                        <div className="w-20 h-20">

                        </div>
                        <div className='flex gap-2 items-center'>
                            <a
                                href="https://www.linkedin.com/company/brainfogagency/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-hero-accent-orange hover:scale-110 transition-all"
                            >
                                <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/brainfog_agency?igsh=MW0xYTF6OXk0cWUyZw=="
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-hero-accent-orange hover:scale-110 transition-all"
                            >
                                <img src={instagram} alt="Instagram" className="w-6 h-6" />
                            </a>
                        </div>
                        <img
                            src={makeinindia}
                            alt="India"
                            className="w-20 h-20"
                        />
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
