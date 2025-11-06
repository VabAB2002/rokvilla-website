"use client";

import { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Location {
  id: string;
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
}

// Pre-cached geocoded locations (to avoid API calls on every load)
const locations: Location[] = [
  {
    id: "1",
    name: "ROKVILLA - Hubballi",
    address: "Rokvilla Design & Build Co, 20, Hubballi, Karnataka 580031",
    position: { lat: 15.3647, lng: 75.1240 }, // Pre-geocoded coordinates
  },
  {
    id: "2",
    name: "ROKVILLA - Dharwad",
    address: "CXQR+552, 16 WA&NE, 14th B Sub Main, Navodaya Nagar, Kalyan Nagar, Dharwad, Karnataka 580003",
    position: { lat: 15.4389, lng: 75.0071 }, // Pre-geocoded coordinates
  },
  {
    id: "3",
    name: "ROKVILLA - Ballari",
    address: "Vishnu Nagar, Gandhi Nagar, Ballari, Karnataka 583103",
    position: { lat: 15.168511946948264, lng: 76.95881914030683 }, // Pre-geocoded coordinates
  },
];

// Individual Map Component for each location
interface SingleMapProps {
  location: Location;
  shouldLoadMap: boolean;
  onGetDirections: (address: string) => void;
  index: number;
  isVisible: boolean;
}

function SingleMap({ location, shouldLoadMap, onGetDirections, index, isVisible }: SingleMapProps) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-col group"
    >
      {/* Location Label */}
      <div className="mb-5 sm:mb-6 h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-between">
        <button
          onClick={() => onGetDirections(location.address)}
          className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-gray-700 active:scale-[0.97] transition-all duration-300 flex items-center gap-2.5 group/btn focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg px-1 -ml-1"
          aria-label={`Get directions to ${location.name}`}
        >
          <span className="tracking-tight">{location.name.replace("ROKVILLA - ", "")}</span>
          <svg
            className="w-5 h-5 opacity-0 group-hover/btn:opacity-100 translate-x-[-4px] group-hover/btn:translate-x-0 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-2">{location.address}</p>
      </div>

      {/* Map Container */}
      <div className="flex-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.01] border border-gray-200/50 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px]">
        {!shouldLoadMap ? (
          // Loading map skeleton - show before map loads
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-center">
              <div className="w-14 h-14 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600 font-medium text-sm tracking-wide">Loading Map...</p>
            </div>
          </div>
        ) : (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={location.position}
            zoom={14}
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: true,
              mapTypeId: 'satellite',
              fullscreenControl: true,
              gestureHandling: 'greedy',
            }}
          >
            <Marker
              position={location.position}
              onClick={() => setShowInfoWindow(true)}
              title={location.name}
              icon={{
                url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" fill="#111827" stroke="#ffffff" stroke-width="2.5"/>
                    <circle cx="12" cy="12" r="9" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1" opacity="0.5"/>
                    <text x="12" y="17" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">${location.name.includes("Hubballi") ? "H" : location.name.includes("Dharwad") ? "D" : "B"}</text>
                  </svg>
                `)}`,
                scaledSize: { width: 60, height: 60 } as any,
                anchor: { x: 30, y: 30 } as any,
              }}
            />

            {showInfoWindow && (
              <InfoWindow
                position={location.position}
                onCloseClick={() => setShowInfoWindow(false)}
              >
                <div className="p-3 sm:p-4 max-w-xs">
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base tracking-tight">
                    {location.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {location.address}
                  </p>
                  <button
                    onClick={() => {
                      onGetDirections(location.address);
                      setShowInfoWindow(false);
                    }}
                    className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-semibold min-h-[36px] flex items-center gap-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                  >
                    Get Directions
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
    </motion.div>
  );
}

export default function MapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const loadScriptRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Lazy load map only when section becomes visible
  useEffect(() => {
    if (isVisible && !shouldLoadMap && !loadScriptRef.current) {
      // Add a small delay to ensure smooth scrolling
      const timer = setTimeout(() => {
        setShouldLoadMap(true);
        loadScriptRef.current = true;
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldLoadMap]);

  // Track scroll position for active index on mobile carousel
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const gap = 24; // 1.5rem = 24px gap between cards
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      const clampedIndex = Math.max(0, Math.min(newIndex, locations.length - 1));
      setActiveIndex(clampedIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [shouldLoadMap]);

  // Scroll to specific card index
  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.offsetWidth;
    const gap = 24; // 1.5rem = 24px gap between cards
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  if (!apiKey) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 text-lg">
            Google Maps API key is missing. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.
          </p>
        </div>
      </section>
    );
  }

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, "_blank");
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-screen flex items-center justify-center bg-[#F5F1E8]"
    >
      <div className="w-full h-full py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
          className="max-w-[1600px] mx-auto mb-10 sm:mb-12 md:mb-16"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-5 sm:mb-6 tracking-tight">
            Where to find us?
          </h2>
          
          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
            We have three locations to serve you better across Karnataka. Visit us or get directions to our offices.
          </p>
        </motion.div>

        {/* Three Maps with Enhanced Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ willChange: shouldLoadMap ? 'transform, opacity' : 'auto' }}
          className="w-full max-w-[1600px] mx-auto relative"
        >
          {shouldLoadMap ? (
            <LoadScript 
              googleMapsApiKey={apiKey}
              loadingElement={
                <div className="w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse flex items-center justify-center rounded-2xl border border-gray-200/50">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium tracking-wide">Loading Maps...</p>
                  </div>
                </div>
              }
            >
              {/* Desktop: Grid Layout */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
                {/* First Map - Hubballi */}
                <div className="w-full flex flex-col relative pr-4">
                  <SingleMap
                    location={locations[0]}
                    shouldLoadMap={shouldLoadMap}
                    onGetDirections={handleGetDirections}
                    index={0}
                    isVisible={isVisible}
                  />
                </div>

                {/* Second Map - Dharwad */}
                <div className="w-full flex flex-col relative px-4">
                  <SingleMap
                    location={locations[1]}
                    shouldLoadMap={shouldLoadMap}
                    onGetDirections={handleGetDirections}
                    index={1}
                    isVisible={isVisible}
                  />
                </div>

                {/* Third Map - Ballari */}
                <div className="w-full flex flex-col relative pl-4">
                  <SingleMap
                    location={locations[2]}
                    shouldLoadMap={shouldLoadMap}
                    onGetDirections={handleGetDirections}
                    index={2}
                    isVisible={isVisible}
                  />
                </div>
              </div>

              {/* Desktop: Partition/Dividers */}
              <div 
                className="hidden lg:block absolute left-[33.333%] top-0 bottom-0 w-[1px] pointer-events-none z-10"
                style={{ 
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(209, 213, 219, 0.2) 15%, rgba(209, 213, 219, 0.4) 50%, rgba(209, 213, 219, 0.2) 85%, transparent 100%)',
                  height: 'calc(100% - 5.5rem)',
                  top: '5.5rem',
                  boxShadow: '0 0 1px rgba(209, 213, 219, 0.3)'
                }}
              />
              <div 
                className="hidden lg:block absolute left-[66.666%] top-0 bottom-0 w-[1px] pointer-events-none z-10"
                style={{ 
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(209, 213, 219, 0.2) 15%, rgba(209, 213, 219, 0.4) 50%, rgba(209, 213, 219, 0.2) 85%, transparent 100%)',
                  height: 'calc(100% - 5.5rem)',
                  top: '5.5rem',
                  boxShadow: '0 0 1px rgba(209, 213, 219, 0.3)'
                }}
              />

              {/* Mobile: Swipeable Carousel */}
              <div className="lg:hidden relative">
                {/* Scrollable Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 sm:-mx-6 px-4 sm:px-6 gap-6"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch',
                  }}
                >
                  {locations.map((location, index) => (
                    <div
                      key={location.id}
                      className="flex-shrink-0 w-full snap-start"
                      style={{ width: 'calc(100vw - 3rem)' }}
                    >
                      <SingleMap
                        location={location}
                        shouldLoadMap={shouldLoadMap}
                        onGetDirections={handleGetDirections}
                        index={index}
                        isVisible={isVisible}
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center items-center gap-2 mt-6">
                  {locations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToIndex(index)}
                      className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${
                        activeIndex === index
                          ? 'w-8 h-2.5 bg-gray-900'
                          : 'w-2.5 h-2.5 bg-gray-400 hover:bg-gray-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Swipe Hint Text */}
                <p className="text-center text-sm text-gray-500 mt-4">
                  Swipe to explore locations
                </p>
              </div>
            </LoadScript>
          ) : (
            <>
              {/* Desktop Loading Skeleton */}
              <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
                {[0, 1, 2].map((index) => (
                  <div key={index} className="w-full flex flex-col">
                    <div className="mb-5 sm:mb-6 h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-between">
                      <div className="h-7 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-lg w-32"></div>
                      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-md w-full"></div>
                    </div>
                    <div className="flex-1 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl border border-gray-200/50"></div>
                  </div>
                ))}
              </div>

              {/* Mobile Loading Skeleton */}
              <div className="lg:hidden">
                <div className="w-full flex flex-col">
                  <div className="mb-5 sm:mb-6 h-[70px] sm:h-[80px] md:h-[90px] flex flex-col justify-between">
                    <div className="h-7 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-lg w-32"></div>
                    <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-md w-full"></div>
                  </div>
                  <div className="flex-1 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl border border-gray-200/50"></div>
                </div>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

