import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Ticker = ({ items, activeFilter, setActiveFilter }) => {
    const [hovered, setHovered] = useState(null);
    const [shouldScroll, setShouldScroll] = useState(false);
    const wrapperRef = useRef(null);
    const sliderRef = useRef(null);
    const screenWidth = window.innerWidth;
    console.log(screenWidth);


    // Check overflow after items render
    useEffect(() => {
        const checkOverflow = () => {
            if (!wrapperRef.current) return;
            const container = wrapperRef.current;
            const content = container.querySelector(".slick-track");
            if (content) {
                const containerWidth = container.offsetWidth;
                const contentWidth = content.scrollWidth;
                setShouldScroll(contentWidth > containerWidth);
            }
        };

        // Delay ensures DOM is painted before measuring
        const timeout = setTimeout(checkOverflow, 300);
        window.addEventListener("resize", checkOverflow);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", checkOverflow);
        };
    }, [items]);



    const settings = {
        dots: false,
        infinite: screenWidth < 1100 ? true : false,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: screenWidth < 1100 ? true : false,
        arrows: false,
        variableWidth: true,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    return (
        <div id="ticker" ref={wrapperRef} className={`${screenWidth > 1100 ? "max-w-container mx-auto" : ""}overflow-hidden w-full flex items-center`}>
            <Slider ref={sliderRef} {...settings} className="py-4 !flex items-center justify-center text-center w-full">
                {items.map((item, idx) => (
                    <div key={idx} className="px-2" style={{ width: "auto" }}>
                        <div
                            onClick={() => setActiveFilter(item)}
                            onMouseEnter={() => setHovered(item.value)}
                            onMouseLeave={() => setHovered(null)}
                            className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium cursor-pointer whitespace-nowrap transition-all duration-300
                                ${activeFilter === item.value
                                    ? "bg-black text-white border-black"
                                    : "bg-gray-100 text-black border-gray-300 hover:bg-black hover:text-white"}`}
                        >
                            <img
                                src={item.icon}
                                alt={item.label}
                                className={`w-6 mr-2 transition-all duration-300
                                    ${activeFilter === item.value || hovered === item.value ? "invert" : ""}`}
                            />
                            {item.label}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Ticker;
