import React from 'react';

/**
 * Stylized character illustration replacing the 'O' in PORTFOLIO
 * Inspired by the reference artwork: bold ink lines, wavy/curly hair, expressive eyes, headband
 */
export const HeroAvatar = ({ className = "w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44" }) => {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
      >
        {/* Background circular head backing */}
        <circle cx="80" cy="80" r="74" className="fill-[#F6F6F2] dark:fill-[#121214] stroke-zinc-900 dark:stroke-zinc-100" strokeWidth="4" />

        {/* Curly / textured voluminous hair (top and sides) */}
        <path
          d="M32 66 C22 48, 42 22, 60 20 C72 12, 92 12, 104 20 C122 22, 142 46, 132 66 C144 80, 138 102, 126 112 C124 122, 116 130, 108 136 C102 148, 76 152, 64 144 C54 148, 42 136, 36 122 C26 112, 22 84, 32 66 Z"
          className="fill-zinc-900 dark:fill-zinc-100"
        />

        {/* Inner face cutout */}
        <path
          d="M48 64 C48 54, 58 48, 80 48 C102 48, 112 54, 112 64 C116 84, 114 104, 100 118 C88 126, 72 126, 60 118 C46 104, 44 84, 48 64 Z"
          className="fill-[#F6F6F2] dark:fill-[#18181B] stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="3.5"
        />

        {/* Headband / Bandana across the forehead (as seen in the reference) */}
        <path
          d="M45 66 C65 62, 95 62, 115 66 L114 74 C95 70, 65 70, 46 74 Z"
          className="fill-zinc-900 dark:fill-zinc-100 stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2"
        />
        {/* Headband detail line */}
        <path
          d="M50 70 C70 66, 90 66, 110 70"
          className="stroke-[#F6F6F2] dark:stroke-[#18181B]"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Eyebrows (bold, determined gaze) */}
        <path
          d="M54 78 Q66 73 73 80"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M106 78 Q94 73 87 80"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Expressive Anime/Manga-styled Eyes */}
        {/* Left Eye */}
        <path
          d="M56 86 C60 83, 70 83, 74 88 C70 92, 60 92, 56 86 Z"
          className="fill-zinc-900 dark:fill-zinc-100"
        />
        <circle cx="65" cy="87" r="2.5" className="fill-[#F6F6F2] dark:fill-[#18181B]" />

        {/* Right Eye */}
        <path
          d="M86 88 C90 83, 100 83, 104 86 C100 92, 90 92, 86 88 Z"
          className="fill-zinc-900 dark:fill-zinc-100"
        />
        <circle cx="95" cy="87" r="2.5" className="fill-[#F6F6F2] dark:fill-[#18181B]" />

        {/* Nose (clean graphic lines) */}
        <path
          d="M80 87 L78 98 L84 98"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Mustache & Mouth */}
        <path
          d="M72 104 Q80 102 88 104"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M74 109 Q80 112 86 109"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Chin goatee accent */}
        <path
          d="M78 116 L82 116 L80 120 Z"
          className="fill-zinc-900 dark:fill-zinc-100"
        />

        {/* Ears with piercings/detail */}
        <path
          d="M45 78 C39 82, 39 92, 47 96"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="43" cy="94" r="1.5" className="fill-zinc-900 dark:fill-zinc-100" />

        <path
          d="M115 78 C121 82, 121 92, 113 96"
          className="stroke-zinc-900 dark:stroke-zinc-100"
          strokeWidth="2.5"
          fill="none"
        />
        <circle cx="117" cy="94" r="1.5" className="fill-zinc-900 dark:fill-zinc-100" />
      </svg>
    </div>
  );
};

export default HeroAvatar;
