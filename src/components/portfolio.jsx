import React, { useState, useEffect, useRef } from "react";
import Ticker from "./Ticker";
import twod from '../assets/portfolio/icons/cuida_image-outline (1).png';
import threed from '../assets/portfolio/icons/eva_flash-outline.png';
import concept from '../assets/portfolio/icons/heroicons-outline_speakerphone.png';
import ai from '../assets/portfolio/icons/lets-icons_3d-box.png';
import mix from '../assets/portfolio/icons/webpage 1.png';
import others from '../assets/portfolio/icons/others.png';
import dropdownicon from '../assets/portfolio/icons/dropdownicon.png';
import VideoPlayerModal from "./VideoPlayerModal";

// Main Categories
const mainCategories = [
    { label: "2D Design & Animation", value: "2D", icon: twod },
    { label: "3D Design & Animation", value: "3D", icon: threed },
    { label: "Graphic Designing", value: "GD", icon: concept },
    { label: "AI", value: "AI", icon: ai },
    { label: "Others", value: "Others", icon: others },
    { label: "Video Editing", value: "VE", icon: mix },
];

// Subcategories
const categoryOptions = {
    "2D": ["Figma", "Splash Screen"],
    "3D": ["3D Animation", "3D Lighting", "3D Rigging", "3D Modelling"],
    "GD": ["Brandbook", "Brand Mockup", "Illustrator", "Logo", "Social Media Post"],
    "AI": ["AI Generated Product Ads", "AI Generated Videos", "Brand Reimagine", "What If"],
    "Others": ["Product PackShots", "Short Film", "VFX CGI"],
    "VE": ["Logo Animation", "Motion Graphics"],
};

export default function Portfolio() {
    const [selectedMain, setSelectedMain] = useState(null);
    const [selectedSub, setSelectedSub] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [dropdownRotated, setDropdownRotated] = useState(false);
    const dropdownRef = useRef(null);
    const dropdownButtonRef = useRef(null);
    const screenWidth = window.innerWidth;

    // Fetch portfolio data
    useEffect(() => {
        fetch("/data/portfolioItems.json")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) setPortfolioItems(data);
                else console.error("Fetched data is not an array:", data);
            })
            .catch((err) => console.error("Failed to load portfolio data:", err));
    }, []);

    // Reset subcategory when main category changes
    useEffect(() => {
        setSelectedSub(selectedMain?.label || null);
        setShowDropdown(false);
        setDropdownRotated(false);
    }, [selectedMain]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                dropdownButtonRef.current &&
                !dropdownButtonRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
                setDropdownRotated(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    // Filter items
    const getFilteredItems = () => {
        if (!Array.isArray(portfolioItems)) return [];
        if (!selectedSub) return portfolioItems;

        // Show all items under selected main category if sub === main label
        if (selectedSub === selectedMain?.label) {
            return portfolioItems.filter(item =>
                categoryOptions[selectedMain.value]?.includes(item.tag)
            );
        }

        return portfolioItems.filter(item => item.tag === selectedSub);
    };

    const filteredItems = getFilteredItems();

    const handleSelectedItems = (item) => {
        setSelectedSub(item);
        setShowDropdown(false);
        setDropdownRotated(false);
    };

    const handleSetTicker = (item) => {
        setSelectedMain(item);
        setSelectedSub(item.label);
    };

    return (
        <section id="portfolio" className="pt-16 pb-16 md:pt-40 md:pb-20 section-padding">
            <div className="mx-auto px-md">
                <h2 className="font-title font-extrabold text-textDark text-3xl sm:text-4xl lg:text-[2.8rem] mb-xl text-center">
                    Our Portfolio
                </h2>
                <p className="text-base sm:text-lg lg:text-[1.1rem] text-textMedium max-w-[750px] mx-auto mb-xl leading-relaxed text-center">
                    We offer tailored digital services from branding and web development
                    to marketing and social media that grow your online presence and
                    drive real results.
                </p>

                {/* Filters */}
                <div className="sticky top-xxl z-50 bg-white pb-4">
                    {screenWidth < 1100 ? (
                        <Ticker
                            items={mainCategories}
                            activeFilter={selectedMain?.value}
                            setActiveFilter={handleSetTicker}
                        />
                    ) : (
                        <div className="max-w-container mx-auto w-full">
                            <Ticker
                                items={mainCategories}
                                activeFilter={selectedMain?.value}
                                setActiveFilter={handleSetTicker}
                            />
                        </div>
                    )}

                    {/* Subcategory Dropdown */}
                    <div className="relative w-full max-w-container mx-auto">
                        {selectedMain && (
                            <button
                                ref={dropdownButtonRef}
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevent bubbling
                                    setShowDropdown((prev) => !prev);
                                    setDropdownRotated((prev) => !prev);
                                }}
                                className="group flex items-center gap-2 px-6 py-2 rounded-full border bg-gray-100 text-black text-sm font-medium hover:bg-black hover:text-white transition-all duration-300"
                            >
                                {selectedSub}
                                <img
                                    src={dropdownicon}
                                    alt="dropdown"
                                    className={`h-2 transition-all duration-300 ${dropdownRotated ? "rotate-180" : ""} group-hover:invert`}
                                />
                            </button>
                        )}

                        {showDropdown && (
                            <div ref={dropdownRef} className="absolute left-0 mt-3 flex flex-col gap-2 bg-white border rounded-xl shadow-lg p-4 z-50 max-w-[90vw] w-auto">
                                {/* Show all if sub == main label */}
                                {categoryOptions[selectedMain.value]?.map((item) => (
                                    <div
                                        key={item}
                                        onClick={() => handleSelectedItems(item)}
                                        className={`cursor-pointer inline-flex items-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
            ${selectedSub === item ? "bg-black text-white" : "bg-gray-100 text-black hover:bg-black hover:text-white"}`}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* Portfolio Grid */}
                <div className="max-w-container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {filteredItems.map((item, i) => (
                        <div key={i} className="w-full">
                            <VideoPlayerModal item={item} allItems={filteredItems} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
