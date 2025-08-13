import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import JoinUs from './components/JoinUs';
import Contacts from './components/Contacts';
import Blogs from './components/Blogs';
// import AboutPage from './pages/AboutPage';
// import WhyUsPage from './pages/WhyUsPage';
// import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
// import TeamPage from './pages/TeamPage';
// import JoinUsPage from './pages/JoinUsPage';
// import ContactPage from './pages/ContactPage';
// import BlogPage from './pages/BlogPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    {/* <Route path="about" element={<AboutPage />} />
                    <Route path="why-us" element={<WhyUsPage />} />
                    <Route path="services" element={<ServicesPage />} /> */}
                    {/* Team page route could be added if 'Meet The Team' link in footer is for a dedicated page */}
                    {/* <Route path="team" element={<TeamPage />} /> */}
                    <Route path="ourportfolio" element={<PortfolioPage />} />
                    <Route path="join-us" element={<JoinUs />} />
                    <Route path="contact" element={<Contacts />} />
                    <Route path="blog" element={<Blogs />} />
                    {/* Add other routes as needed */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;