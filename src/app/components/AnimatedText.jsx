'use client';

import React from 'react';

const AnimatedText = ({ text }) => {
  // Consistent word handling for both layers
  const words = text.trim().split(/\s+/);
  const normalizedText = words.join(' '); // Single-space normalization

  return (
    <p className="text-[1.5rem] grid" style={{ gridTemplateAreas: 'overlap' }}>
      {/* Hidden bold text with normalized spacing */}
      <span
        className="invisible font-bold whitespace-pre"
        style={{ gridArea: 'overlap' }}
        aria-hidden="true"
      >
        {normalizedText}
      </span>

      {/* Visible text with identical spacing */}
      <span
        style={{ gridArea: 'overlap' }}
        className="whitespace-pre" // Match hidden text's whitespace
      >
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span className="hover:font-bold transition-all duration-200">
              {word}
            </span>
            {index !== words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </span>
    </p>
  );
};

export default AnimatedText;