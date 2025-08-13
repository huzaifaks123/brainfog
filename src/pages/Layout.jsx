import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTABanner from '../components/CTABanner';
import BackToTopButton from '../components/BackToTopButton';

const Layout = () => {
    const location = useLocation();

    React.useEffect(() => {
        // Scroll to top on route change, or to hash if present
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <CTABanner />
            <BackToTopButton targetId="root" /> {/* Or specific ID of hero if always scroll to top of content */}
        </div>
    );
};

export default Layout;