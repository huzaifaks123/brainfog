import React, { useRef, useState } from "react";

const VideoPlayerModal = ({ item, allItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(item.image);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [thumbLoaded, setThumbLoaded] = useState(false); // for card loader
    const [modalLoaded, setModalLoaded] = useState(false); // for modal loader
    const hoverRef = useRef(null);
    const lastTouch = useRef(0);

    const isVideo = (src) => /\.(mp4|avi|mov|webm)$/i.test(src);

    const handleHover = () => {
        const video = hoverRef.current;
        if (video && isVideo(item.image)) {
            video.currentTime = 0;
            video.play();
            setTimeout(() => {
                video.pause();
                video.currentTime = 0;
            }, 5000);
        }
    };

    const handleTouch = (e) => {
        const now = new Date().getTime();
        if (now - lastTouch.current <= 300) {
            setSelectedMedia(item.image);
            setThumbLoaded(true);
            setIsOpen(true);
        }
        lastTouch.current = now;
    };

    const getSecondsFromHHMMSS = (hhmmss) => {
        if (!hhmmss) return 0;
        const parts = hhmmss.split(":").map(Number);
        return parts.reduce((acc, time) => 60 * acc + time, 0);
    };

    const thumbTime = getSecondsFromHHMMSS(item.thumbnail);

    const handleHoverStart = () => {
        const video = hoverRef.current;
        if (video) {
            video.currentTime = thumbTime;
            video.play();
            setTimeout(() => {
                video.pause();
                video.currentTime = thumbTime; // reset to thumbnail
            }, 5000);
        }
    };

    const handleHoverEnd = () => {
        const video = hoverRef.current;
        if (video) {
            video.pause();
            video.currentTime = thumbTime; // always reset to thumbnail frame
        }
    };


    const openModal = (src) => {
        setSelectedMedia(src);
        setModalLoaded(false);
        setIsOpen(true);
    };

    const handleSuggestionClick = (src) => {
        setSelectedMedia(src);
        setModalLoaded(false);
    };

    return (
        <>
            {/* Preview Card */}
            <div
                className="relative w-full max-w-md mx-auto cursor-pointer select-none"
                onMouseEnter={handleHover}
                onTouchStart={handleTouch}
                onDoubleClick={() => openModal(item.image)}
            >
                {/* Loader Spinner for Card */}
                {!thumbLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 z-10 rounded-md">
                        <div className="h-8 w-8 border-4 border-[#ff7a59] border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                {/* {isVideo(item.image) && item.image ? (
                    <video
                        ref={hoverRef}
                        src={item.image}
                        muted
                        preload="metadata"
                        className="rounded-md shadow-md w-full h-64 object-cover"
                        onLoadedData={() => setThumbLoaded(false)}
                        onError={() => setThumbLoaded(false)} // <- stops spinner if video fails
                    />
                ) : (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md shadow-md w-full h-64 object-cover"
                        onLoad={() => setThumbLoaded(false)}
                        onError={() => setThumbLoaded(false)}
                    />
                )} */}

                {isVideo(item.image) && item.image ? (
                    <video
                        ref={(el) => {
                            hoverRef.current = el;
                            if (el) {
                                el.addEventListener("loadedmetadata", () => {
                                    el.currentTime = thumbTime;
                                });
                            }
                        }}
                        src={item.image}
                        muted
                        preload="metadata"
                        className={`rounded-md shadow-md w-full h-64 object-${item.position && item.position} object-cover`}
                        onLoadedData={() => setThumbLoaded(true)}
                        onError={() => setThumbLoaded(false)}
                        onMouseEnter={handleHoverStart}
                        onMouseLeave={handleHoverEnd}
                        onTouchStart={handleHoverStart}
                        onTouchEnd={handleHoverEnd}
                    />
                ) : (
                    <img
                        src={item.image}
                        alt={item.title}
                        className="rounded-md shadow-md w-full h-64 object-cover"
                        onLoad={() => setThumbLoaded(true)}
                        onError={() => setThumbLoaded(false)}
                    />
                )}

                <div className="absolute inset-0 rounded-md py-2 bg-black/30 flex flex-col items-center justify-between text-white text-md font-semibold opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-xl">{item.title}</span>
                    <span className="text-xs text-gray-300">Double Tap to View</span>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center pt-20 justify-center"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="w-full max-w-screen-sm h-[90vh] sm:h-[80vh] rounded-lg relative p-2 bg-black"
                        onClick={(e) => e.stopPropagation()}
                        onMouseMove={(e) => {
                            setShowSuggestions(e.nativeEvent.offsetY < 100);
                        }}
                    >
                        {/* Loader for Modal */}
                        {!modalLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10 rounded-md">
                                <div className="h-10 w-10 border-4 border-[#ff7a59] border-t-transparent rounded-full animate-spin" />
                            </div>
                        )}

                        {isVideo(selectedMedia) ? (
                            <video
                                src={selectedMedia}
                                className="rounded-lg w-full h-full object-contain"
                                controls
                                autoPlay
                                onEnded={() => setShowSuggestions(true)}
                                onLoadedData={() => setModalLoaded(true)}
                            />
                        ) : (
                            <img
                                src={selectedMedia}
                                alt="Preview"
                                className="rounded-lg w-full h-full object-contain"
                                onLoad={() => setModalLoaded(true)}
                            />
                        )}

                        {/* Suggestions */}
                        <div
                            className={`absolute top-0 left-0 w-full px-4 py-4 z-10 pointer-events-none bg-gradient-to-b from-black/100 via-black/20 to-transparent backdrop-blur-md transition-opacity duration-500 ease-in-out ${showSuggestions ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div
                                className="flex overflow-x-auto space-x-4 pointer-events-auto scroll-smooth stylish-scrollbar"
                                style={{
                                    WebkitOverflowScrolling: "touch",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                }}
                            >
                                {allItems.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-40 cursor-pointer"
                                        onClick={() => handleSuggestionClick(suggestion.image)}
                                    >
                                        {isVideo(suggestion.image) ? (
                                            <video
                                                src={suggestion.image}
                                                className="w-40 h-24 object-cover rounded-md"
                                                muted
                                                preload="metadata"
                                            />
                                        ) : (
                                            <img
                                                src={suggestion.image}
                                                alt={suggestion.title}
                                                className="w-40 h-24 object-cover rounded-md"
                                            />
                                        )}
                                        <p className="text-white text-xs text-center mt-2 truncate">
                                            {suggestion.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-70 rounded-full px-3 z-20"
                            onClick={() => setIsOpen(false)}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default VideoPlayerModal;