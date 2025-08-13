import React from 'react';
import TeamCard from './TeamCard';

const teamMembers = [
    { name: "Priya Sharma", role: "Creative Director", bio: "Priya brings visionary ideas to life, shaping unforgettable brand experiences with her artistic flair and strategic insight." },
    { name: "Arjun Patel", role: "Lead Developer", bio: "Arjun meticulously crafts robust and seamless digital solutions, focusing on cutting-edge technology and optimal performance." },
    { name: "Neha Gupta", role: "Marketing Strategist", bio: "Neha expertly drives growth and engagement with innovative, data-driven marketing campaigns tailored for maximum impact." },
];

const Team = () => {
    return (
        <section id="team" className="pt-16 pb-16 md:pt-40 md:pb-20 section-padding">
            <div className="container max-w-container mx-auto px-md">
                <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl text-center">
                    Our Team
                </h2>
                <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
                    Meet the passionate and creative minds at Brainfog, dedicated to driving digital innovation and your success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
                    {teamMembers.map(member => (
                        <TeamCard
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            bio={member.bio}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;