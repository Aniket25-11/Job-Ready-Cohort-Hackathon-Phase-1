import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const logos = [
  '/logos/Fortune.webp',
  '/logos/BBC.webp',
  '/logos/moneycontrol.webp',
  '/logos/The_Economic_Times_logo.svg.webp',
  '/logos/Mint_newspaper_logo.svg.webp',
  '/logos/NDTV_logo.svg.webp',
];

function InfiniteMarquee() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    const setup = (el, dir = -1) => {
      const distance = el.scrollWidth / 2;

      // Set initial position
      gsap.set(el, {
        x: dir === 1 ? -distance : 0,
      });

      gsap.to(el, {
        x: dir === 1 ? 0 : -distance,
        ease: 'none',
        duration: distance / 50,
        repeat: -1,
      });
    };

    setup(topRef.current, -1);  // Leftward
    setup(bottomRef.current, 1);  // Rightward
  }, []);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="w-full bg-black text-white py-12 overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">AS FEATURED ON</h2>

      {/* Leftward */}
      <div className="overflow-hidden whitespace-nowrap mb-4">
        <div ref={topRef} className="inline-flex items-center gap-8 sm:gap-12 md:gap-20">
          {duplicatedLogos.map((src, i) => (
            <img
              key={`top-${i}`}
              src={src}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain invert brightness-200"
            />
          ))}
        </div>
      </div>

      {/* Rightward */}
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={bottomRef} className="inline-flex items-center gap-8 sm:gap-12 md:gap-20">
          {duplicatedLogos.map((src, i) => (
            <img
              key={`bottom-${i}`}
              src={src}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain invert brightness-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfiniteMarquee;
