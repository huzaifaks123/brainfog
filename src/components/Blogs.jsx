import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "AI-Powered Decision-Making in 2025",
    excerpt: "Explore how 65% of enterprises now use AI for real-time analytics, reducing decision-making time by 30%. Learn how tools like predictive models are revolutionizing industries from finance to retail.",
    date: "June 2, 2025",
    link: "#"
  },
  {
    id: 2,
    title: "The Social Commerce Boom: What’s Next?",
    excerpt: "With 55% of shoppers buying via social platforms, dive into how AI personalizes in-app purchases and what this means for brands on Instagram and TikTok.",
    date: "June 2, 2025",
    link: "#"
  },
  {
    id: 3,
    title: "Ethical AI: Building Trust in Technology",
    excerpt: "As 70% of consumers demand transparency, discover how ethical AI practices—like fair algorithms and data privacy—are shaping the future of tech.",
    date: "June 2, 2025",
    link: "#"
  }
];


const Blogs = () => {
  return (
    <section id="blog" className="pt-16 pb-16 md:pt-40 md:pb-20 bg-backgroundMediumLight section-padding">
      <div className="container max-w-container mx-auto px-md">
        <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl text-center">
          Latest Insights
        </h2>
        <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
          Stay ahead with BrainFog’s insights on tech and marketing trends
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              link={post.link} // In a real app, this would be /blog/post-slug
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;