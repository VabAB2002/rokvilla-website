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
];

// Center point between the two locations
const mapCenter = {
  lat: 15.4018,
  lng: 75.0652,
};

export default function MapSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const loadScriptRef = useRef(false);

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
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ willChange: isVisible ? 'transform, opacity' : 'auto' }}
          className="max-w-[1600px] mx-auto mb-6 sm:mb-8 md:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Left - Heading */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Where to find us?
            </h2>
          </div>
          
          {/* Right - Description & Location Info */}
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              We have two locations to serve you better across Karnataka. Visit us or get directions to our offices.
            </p>
            
            {/* Quick Location Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleGetDirections(location.address)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <span className="text-sm sm:text-base">{location.name.replace("ROKVILLA - ", "")}</span>
                  <svg
                    className="w-5 h-5 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Width Map - Responsive height */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
          style={{ willChange: shouldLoadMap ? 'transform, opacity' : 'auto' }}
          className="w-full max-w-[1600px] mx-auto h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] rounded-xl overflow-hidden shadow-2xl"
        >
          {!shouldLoadMap ? (
            // Loading map skeleton - show before map loads
            <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-gray-400 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600 font-semibold">Loading Map...</p>
              </div>
            </div>
          ) : (
            <LoadScript 
              googleMapsApiKey={apiKey}
              loadingElement={
                <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-gray-400 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 font-semibold">Loading Map...</p>
                  </div>
                </div>
              }
            >
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={mapCenter}
                zoom={11}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: true,
                  gestureHandling: 'greedy', // Better touch handling on mobile
                  styles: [
                    {
                      featureType: "poi",
                      elementType: "labels",
                      stylers: [{ visibility: "off" }],
                    },
                  ],
                }}
              >
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.position}
                    onClick={() => setSelectedLocation(location.id)}
                    title={location.name}
                    icon={{
                      url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="8" fill="#111827" stroke="#ffffff" stroke-width="2"/>
                          <text x="12" y="16" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">${location.name.includes("Hubballi") ? "H" : "D"}</text>
                        </svg>
                      `)}`,
                      scaledSize: { width: 56, height: 56 } as any, // Larger markers for touch devices
                      anchor: { x: 28, y: 28 } as any,
                    }}
                  />
                ))}

                {selectedLocation && (
                  <InfoWindow
                    position={
                      locations.find((loc) => loc.id === selectedLocation)?.position || mapCenter
                    }
                    onCloseClick={() => setSelectedLocation(null)}
                  >
                    <div className="p-2 sm:p-3 max-w-xs">
                      <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        {locations.find((loc) => loc.id === selectedLocation)?.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                        {locations.find((loc) => loc.id === selectedLocation)?.address}
                      </p>
                      <button
                        onClick={() =>
                          handleGetDirections(
                            locations.find((loc) => loc.id === selectedLocation)?.address || ""
                          )
                        }
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-semibold min-h-[36px] flex items-center"
                      >
                        Get Directions →
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </LoadScript>
          )}
        </motion.div>
      </div>
    </section>
  );
}

