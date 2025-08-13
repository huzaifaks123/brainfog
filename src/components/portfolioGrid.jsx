import React, { useState } from "react";

export default function PortfolioGrid({ items }) {
  const [modalItem, setModalItem] = useState(null);

  const isVideo = (src) => {
    return src.endsWith(".mp4") || src.includes("video");
  };

  return (
    <div className="container max-w-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div key={i} className="w-full">
          <div
            onDoubleClick={() => setModalItem(item)}
            className="relative w-full rounded-md overflow-hidden shadow-lg hover:shadow-xl transition duration-300 bg-white group"
            style={{ aspectRatio: "580 / 396" }}
          >
            {isVideo(item.image) ? (
              <video
                src={item.image}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:opacity-100"
                onMouseEnter={(e) => {
                  e.target.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
              />
            )}

            <div
              onDoubleClick={() => setModalItem(item)}
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto"
            >
              <p className="text-white text-lg font-semibold text-center px-2 animate-fade-in">
                {item.title}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Modal View */}
      {modalItem && (
        <div
          className="fixed mt-10 inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-[80vw] h-[80vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(modalItem.image) ? (
              <video
                src={modalItem.image}
                className="w-full h-full object-contain"
                autoPlay
                muted
                loop
                controls
              />
            ) : (
              <img
                src={modalItem.image}
                alt={modalItem.title}
                className="w-full h-full object-contain"
              />
            )}
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-2 right-2 bg-white rounded-full shadow px-2 py-1 text-black text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}