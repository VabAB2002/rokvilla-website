"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface VideoHeroProps {
  videoUrl?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function VideoHero({
  videoUrl = "/videos/hero-video.mp4",
  title,
  subtitle,
  ctaText = "Discover more",
  ctaLink = "/projects",
}: VideoHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Lazy load video with slight delay to prioritize page load
    const loadTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().catch(() => {
          // Auto-play might be blocked, handle gracefully
          setIsPlaying(false);
        });
      }
    }, 100);

    return () => clearTimeout(loadTimer);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fallback Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      
      {/* Video Background - Optimized for mobile */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => setVideoLoaded(true)}
        poster="/images/hero-poster.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            {/* Main Title - Responsive sizing */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>

            {/* Subtitle - Better mobile sizing */}
            {subtitle && (
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Play/Pause Button - Repositioned for mobile thumb reach */}
      <button
        onClick={togglePlay}
        className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 z-20 p-3 sm:p-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center no-touch-size rounded-sm"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? (
          // Pause Icon
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 9v6m4-6v6"
            />
          </svg>
        ) : (
          // Play Icon
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        )}
      </button>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Small Legal Text at Bottom - Better mobile handling */}
      <div className="hidden sm:block absolute bottom-4 left-4 sm:left-6 right-16 sm:right-24 z-20 text-white/60 text-xs">
        <p>
          Professional architectural visualization. Project details and
          specifications may vary.
        </p>
      </div>
    </div>
  );
}

