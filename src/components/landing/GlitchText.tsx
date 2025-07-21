
"use client";

import { FC, CSSProperties } from "react";

interface GlitchTextProps {
  children: string;
  speed?: number;
  enableShadows?: boolean;
  enableOnHover?: boolean;
  className?: string;
  gradientClassName?: string;
}

interface CustomCSSProperties extends CSSProperties {
  "--after-duration": string;
  "--before-duration": string;
  "--after-shadow": string;
  "--before-shadow": string;
}

const GlitchText: FC<GlitchTextProps> = ({
  children,
  speed = 1,
  enableShadows = true,
  enableOnHover = false,
  className = "",
  gradientClassName = "",
}) => {
  const inlineStyles: CustomCSSProperties = {
    "--after-duration": `${speed * 3}s`,
    "--before-duration": `${speed * 2}s`,
    "--after-shadow": enableShadows ? "-5px 0 #FF77FF" : "none", // Using accent color
    "--before-shadow": enableShadows ? "5px 0 #A020F0" : "none",  // Using primary color
  };

  const baseClasses =
    "relative mx-auto select-none cursor-pointer";

  const pseudoClasses = !enableOnHover
    ? `after:content-[attr(data-text)] after:absolute after:top-0 after:left-[10px] after:bg-transparent after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:[text-shadow:var(--after-shadow)] after:animate-glitch-after ${gradientClassName} ` +
      `before:content-[attr(data-text)] before:absolute before:top-0 before:left-[-10px] before:bg-transparent before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:[text-shadow:var(--before-shadow)] before:animate-glitch-before ${gradientClassName}`
    : `after:content-[''] after:absolute after:top-0 after:left-[10px] after:bg-transparent after:overflow-hidden after:[clip-path:inset(0_0_0_0)] after:opacity-0 ` +
      `before:content-[''] before:absolute before:top-0 before:left-[-10px] before:bg-transparent before:overflow-hidden before:[clip-path:inset(0_0_0_0)] before:opacity-0 ` +
      `hover:after:content-[attr(data-text)] hover:after:opacity-100 hover:after:[text-shadow:var(--after-shadow)] hover:after:animate-glitch-after ${gradientClassName} ` +
      `hover:before:content-[attr(data-text)] hover:before:opacity-100 hover:before:[text-shadow:var(--before-shadow)] hover:before:animate-glitch-before ${gradientClassName}`;

  const combinedClasses = `${baseClasses} ${pseudoClasses} ${className}`;

  return (
    <div style={inlineStyles} data-text={children} className={combinedClasses}>
      <span className={gradientClassName}>{children}</span>
    </div>
  );
};

export default GlitchText;
