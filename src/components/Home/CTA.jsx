import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiBook, FiYoutube, FiBookOpen } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const CTA = ({ variant = "courses" }) => {
    const ctaRef = useRef(null);
    const contentRef = useRef(null);
    const buttonRef = useRef(null);

    const ctaConfig = {
        courses: {
            title: "Level Up Your Skills",
            description: "Join 50,000+ students in Ankur's bestselling courses on entrepreneurship and personal growth",
            buttonText: "Explore Courses",
            icon: <FiBookOpen className="w-6 h-6" />,
            gradient: "from-[#6C63FF] to-[#9F7AEA]",
            link: "#courses"
        },
        book: {
            title: "Get The Bestseller",
            description: "Discover Ankur's wisdom in his acclaimed book 'Do Epic Shit' - your guide to thinking differently",
            buttonText: "Buy My Book",
            icon: <FiBook className="w-6 h-6" />,
            gradient: "from-[#FF6B6B] to-[#FF8E53]",
            link: "#book"
        },
        youtube: {
            title: "Join The Community",
            description: "Subscribe for weekly videos on business, productivity and life lessons",
            buttonText: "Subscribe on YouTube",
            icon: <FiYoutube className="w-6 h-6" />,
            gradient: "from-[#FF416C] to-[#FF4B2B]",
            link: "https://youtube.com/ankurwarikoo"
        }
    };

    const currentCTA = ctaConfig[variant] || ctaConfig.courses;

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 80%",     // Adjust scroll start
                    toggleActions: "play none none none",
                    once: true            // Prevent repeating
                }
            });

            tl.from(contentRef.current, {
                opacity: 0,
                y: 60,
                duration: 0.8,
                ease: "power3.out"
            }).from(buttonRef.current, {
                opacity: 0,
                y: 40,
                duration: 0.6,
                ease: "back.out(1.4)"
            }, "-=0.3");
        }, ctaRef);

        return () => ctx.revert(); // cleanup
    }, [variant]);

    return (
        <section
            ref={ctaRef}
            className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r ${currentCTA.gradient} text-white`}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Content */}
                    <div ref={contentRef} className="lg:max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentCTA.title}</h2>
                        <p className="text-lg md:text-xl opacity-90 mb-6 lg:mb-0">
                            {currentCTA.description}
                        </p>
                    </div>

                    {/* Button */}
                    <div ref={buttonRef}>
                        <a
                            href={currentCTA.link}
                            target={variant === 'youtube' ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[220px]"
                        >
                            <span className="flex items-center gap-2">
                                {currentCTA.icon}
                                {currentCTA.buttonText}
                            </span>
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTA;
