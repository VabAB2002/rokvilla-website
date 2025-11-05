"use client";

import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  colors?: {
    textColor: string;
    hoverTextColor: string;
    marqueeBackgroundColor: string;
    marqueeTextColor: string;
  };
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
  theme?: 'light' | 'dark'; // light = dark text on light bg, dark = light text on dark bg
  customColors?: {
    textColor?: string;
    hoverTextColor?: string;
    marqueeBackgroundColor?: string;
    marqueeTextColor?: string;
  };
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ 
  items = [], 
  theme = 'dark',
  customColors 
}) => {
  // Define theme-based color schemes
  const colorScheme = React.useMemo(() => {
    if (customColors) {
      return {
        textColor: customColors.textColor || (theme === 'dark' ? '#ffffff' : '#060010'),
        hoverTextColor: customColors.hoverTextColor || (theme === 'dark' ? '#060010' : '#ffffff'),
        marqueeBackgroundColor: customColors.marqueeBackgroundColor || (theme === 'dark' ? '#ffffff' : '#060010'),
        marqueeTextColor: customColors.marqueeTextColor || (theme === 'dark' ? '#060010' : '#ffffff'),
      };
    }
    
    return theme === 'dark'
      ? {
          textColor: '#ffffff',
          hoverTextColor: '#060010',
          marqueeBackgroundColor: '#ffffff',
          marqueeTextColor: '#060010',
        }
      : {
          textColor: '#060010',
          hoverTextColor: '#ffffff',
          marqueeBackgroundColor: '#060010',
          marqueeTextColor: '#ffffff',
        };
  }, [theme, customColors]);

  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} colors={colorScheme} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, colors }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  // Default colors (dark theme) if not provided
  const defaultColors = {
    textColor: '#ffffff',
    hoverTextColor: '#060010',
    marqueeBackgroundColor: '#ffffff',
    marqueeTextColor: '#060010',
  };

  const activeColors = colors || defaultColors;

  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): 'top' | 'bottom' => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice) return; // Disable on touch devices
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' });
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (isTouchDevice) return; // Disable on touch devices
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    const tl = gsap.timeline({ defaults: animationDefaults });
    tl.to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' })
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, '<');
  };

  // Touch handlers for mobile
  const handleTouchStart = () => {
    if (!isTouchDevice) return;
    setIsActive(true);
  };

  const handleTouchEnd = () => {
    if (!isTouchDevice) return;
    setTimeout(() => setIsActive(false), 150);
  };

  const repeatedMarqueeContent = React.useMemo(() => {
    return Array.from({ length: 4 }).map((_, idx) => (
      <React.Fragment key={idx}>
        <span 
          className="uppercase font-normal text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.2] px-4 py-2"
          style={{ color: activeColors.marqueeTextColor }}
        >
          {text}
        </span>
        <div
          className="w-[120px] sm:w-[150px] md:w-[180px] h-[50px] sm:h-[60px] md:h-[70px] my-4 mx-4 rounded-full bg-cover bg-center flex-shrink-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </React.Fragment>
    ));
  }, [text, image, activeColors.marqueeTextColor]);

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_rgba(255,255,255,0.2)]"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 px-4"
        style={{ 
          color: isActive && isTouchDevice ? activeColors.hoverTextColor : activeColors.textColor,
          backgroundColor: isActive && isTouchDevice ? activeColors.marqueeBackgroundColor : 'transparent',
          transform: isActive && isTouchDevice ? 'scale(0.98)' : 'scale(1)',
        }}
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={(e) => {
          if (!isTouchDevice) {
            (e.currentTarget as HTMLAnchorElement).style.color = activeColors.hoverTextColor;
          }
        }}
        onMouseOut={(e) => {
          if (!isTouchDevice) {
            (e.currentTarget as HTMLAnchorElement).style.color = activeColors.textColor;
          }
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {text}
      </a>
      {!isTouchDevice && (
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none translate-y-[101%]"
          style={{ backgroundColor: activeColors.marqueeBackgroundColor }}
          ref={marqueeRef}
        >
          <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
            <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
              {repeatedMarqueeContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowingMenu;


