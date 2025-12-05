"use client";
import * as React from "react";

const ArrowBoxDarkBorder = ({ width = 465, height = 369, ...props }) => {
  // Generate unique IDs for this instance
  const uniqueId = React.useId();
  const clipPathId = `cp-${uniqueId}`;
  const gradientId = `g-${uniqueId}`;

  // Calculate the adjustable vertical dimension based on height
  const baseHeight = 369;
  const baseVertical = 298.49;
  const verticalAdjustment = height - baseHeight;
  const adjustedVertical = baseVertical + verticalAdjustment;
  const totalVertical = 351 + verticalAdjustment;

  // Calculate the adjustable horizontal dimension based on width
  const baseWidth = 465;
  const baseBoxWidth = 446;
  const horizontalAdjustment = width - baseWidth;
  const adjustedBoxWidth = baseBoxWidth + horizontalAdjustment;
  
  // The notch starts at 402.99 in the base design
  const baseNotchStart = 402.99;
  const adjustedNotchStart = baseNotchStart + horizontalAdjustment;

  // Scale the gradient transform based on width and height
  const scaleX = width / baseWidth;
  const scaleY = height / baseHeight;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      style={{ display: 'block' }}
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id={clipPathId}>
          <path d={`m${adjustedNotchStart} 0c-7.72 7.85-12.49 18.62-12.49 30.5 0 24.02 19.48 43.5 43.5 43.5 11.88 0 22.65-4.77 30.5-12.49v${adjustedVertical}c0 4.97-4.03 9-9 9h-${adjustedBoxWidth}c-4.97 0-9-4.03-9-9v-${totalVertical}c0-4.97 4.03-9 9-9z`} />
        </clipPath>
        <linearGradient
          id={gradientId}
          x2={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform={`matrix(${-926.934 * scaleX},${-330.124 * scaleY},${285.734 * scaleX},${-802.295 * scaleY},${684.349 * scaleX},${881.972 * scaleY})`}
        >
          <stop offset={0} stopColor="#ffffff" />
          <stop offset={1} stopColor="#500d0d" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clipPathId})`}>
        <path
          fill={`url(#${gradientId})`}
          d={`m${adjustedNotchStart} 0l0.71 0.7 1.67-1.7h-2.38zm61.51 61.51h1v-2.38l-1.7 1.67zm-61.51-61.51l-0.72-0.7c-7.89 8.03-12.77 19.04-12.77 31.2h1 1c0-11.61 4.65-22.13 12.2-29.8zm-12.49 30.5h-1c0 24.58 19.92 44.5 44.5 44.5v-1-1c-23.47 0-42.5-19.03-42.5-42.5zm43.5 43.5v1c12.16 0 23.17-4.88 31.2-12.78l-0.7-0.71-0.7-0.71c-7.67 7.54-18.19 12.2-29.8 12.2zm30.5-12.49h-1v${adjustedVertical}h1 1v-${adjustedVertical}zm0 ${adjustedVertical}h-1c0 4.42-3.58 8-8 8v1 1c5.53 0 10-4.48 10-10zm-9 9v-1h-${adjustedBoxWidth}v1 1h${adjustedBoxWidth}zm-${adjustedBoxWidth} 0v-1c-4.42 0-8-3.58-8-8h-1-1c0 5.52 4.48 10 10 10zm-9-9h1v-${totalVertical}h-1-1v${totalVertical}zm0-${totalVertical}h1c0-4.42 3.58-8 8-8v-1-1c-5.52 0-10 4.48-10 10zm9-9v1h${adjustedNotchStart - 9}v-1-1h-${adjustedNotchStart - 9}z`}
        />
      </g>
    </svg>
  );
};

export default ArrowBoxDarkBorder;