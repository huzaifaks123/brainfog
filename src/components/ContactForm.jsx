import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formMessage, setFormMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormMessage('');

        // Basic client-side validation
        if (!formData.name || !formData.email || !formData.message) {
            setFormMessage('Please fill in all required fields.');
            setIsSubmitting(false);
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setFormMessage('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        // Simulate API call
        try {
            // Replace with your actual form submission logic (e.g., API call)
            await fetch('https://api.brainfogagency.com/mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log("Form submitted:", formData);
            setFormMessage('Thank you for your message! We’ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setFormMessage('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setFormMessage(''), 5000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-[700px] mx-auto">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Name"
                className="w-full p-sm mb-md border border-white/30 rounded-sm font-body text-base bg-white/5 text-hero-text placeholder-white/60 transition-colors duration-300 focus:border-hero-accent-orange focus:bg-white/10 outline-none"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Email"
                className="w-full p-sm mb-md border border-white/30 rounded-sm font-body text-base bg-white/5 text-hero-text placeholder-white/60 transition-colors duration-300 focus:border-hero-accent-orange focus:bg-white/10 outline-none"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Message"
                className="w-full p-sm mb-md border border-white/30 rounded-sm font-body text-base bg-white/5 text-hero-text placeholder-white/60 transition-colors duration-300 focus:border-hero-accent-orange focus:bg-white/10 outline-none min-h-[150px] resize-vertical"
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-hero-accent-orange text-hero-text py-3.5 px-xl border-none rounded-pill font-title font-bold text-base cursor-pointer transition-all duration-300 hover:bg-hero-accent-purple hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {formMessage && (
                <p className={`text-center mt-md text-base p-sm rounded-sm ${formMessage.includes('error') || formMessage.includes('Please') ? 'bg-red-500/30 text-red-300' : 'bg-black/20 text-hero-accent-yellow'}`}>
                    {formMessage}
                </p>
            )}
        </form>
    );
};

export default ContactForm;