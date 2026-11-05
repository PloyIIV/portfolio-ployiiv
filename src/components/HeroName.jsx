import React, { useRef, useState, useEffect } from 'react';

/**
 * HeroName renders CHADAPAN and YUKKRIROEK so that both words
 * have identical width edge-to-edge (C aligns with Y on left, N aligns with K on right)
 * with tight, snug vertical gap between the two lines matching the reference.
 */
export const HeroName = () => {
  const firstTextRef = useRef(null);
  const lastTextRef = useRef(null);

  // Initial calibrated bounding boxes for Sora 900 (at font-size 100px)
  const [viewBoxes, setViewBoxes] = useState({
    first: '0 20 680 82',
    last: '0 20 848 82',
    ready: false
  });

  useEffect(() => {
    const measure = () => {
      if (firstTextRef.current && lastTextRef.current) {
        try {
          const b1 = firstTextRef.current.getBBox();
          const b2 = lastTextRef.current.getBBox();
          if (b1.width > 10 && b2.width > 10) {
            setViewBoxes({
              first: `${b1.x} ${b1.y} ${b1.width} ${b1.height}`,
              last: `${b2.x} ${b2.y} ${b2.width} ${b2.height}`,
              ready: true
            });
          }
        } catch (e) {
          // Fallback handled by initial state
        }
      }
    };

    measure();

    if (document.fonts) {
      document.fonts.ready.then(measure);
    }

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <div className="w-full max-w-3xl sm:max-w-4xl mx-auto flex flex-col items-center justify-center select-none">
      {/* Line 1: CHADAPAN */}
      <div className="w-full overflow-visible leading-none">
        <svg
          viewBox={viewBoxes.first}
          className="w-full h-auto block overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          aria-label="CHADAPAN"
        >
          <text
            ref={firstTextRef}
            x="0"
            y="100"
            className="fill-zinc-900 dark:fill-zinc-100 font-black uppercase tracking-tight text-[100px]"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900 }}
          >
            CHADAPAN
          </text>
        </svg>
      </div>

      {/* Line 2: YUKKRIROEK - pulled close with negative margin to eliminate whitespace */}
      <div className="w-full overflow-visible leading-none -mt-3 sm:-mt-5 md:-mt-7 lg:-mt-9">
        <svg
          viewBox={viewBoxes.last}
          className="w-full h-auto block overflow-visible"
          preserveAspectRatio="xMidYMid meet"
          aria-label="YUKKRIROEK"
        >
          <text
            ref={lastTextRef}
            x="0"
            y="100"
            className="fill-zinc-900 dark:fill-zinc-100 font-black uppercase tracking-tight text-[100px]"
            style={{ fontFamily: "'Sora', sans-serif", fontWeight: 900 }}
          >
            YUKKRIROEK
          </text>
        </svg>
      </div>
    </div>
  );
};

export default HeroName;
