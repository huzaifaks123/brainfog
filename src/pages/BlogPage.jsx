import React from 'react';
import BlogCard from '../components/BlogCard';
import Blogs from '../components/Blogs';

const blogPosts = [
    { id: 1, title: "Top Web Design Trends Shaping 2025", excerpt: "Explore the cutting-edge web design trends that are set to define the digital landscape in the upcoming year. Stay ahead of the curve!", link: "#" },
    { id: 2, title: "Maximizing ROI with Smart Digital Marketing", excerpt: "Learn effective, data-driven digital marketing strategies that can significantly boost your business growth and maximize your return on investment.", link: "#" },
    { id: 3, title: "The Undeniable Power of Strong Branding", excerpt: "Discover why a cohesive and compelling brand identity is absolutely crucial for standing out and succeeding in today’s crowded marketplace.", link: "#" },
];

const BlogPage = () => {
    return (
        <Blogs />
    );
};

export default BlogPage;