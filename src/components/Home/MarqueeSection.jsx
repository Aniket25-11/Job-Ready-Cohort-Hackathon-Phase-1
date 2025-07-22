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
      gsap.to(el, {
        x: dir * distance,
        ease: 'none',
        duration: distance / 50,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % distance),
        },
      });
    };

    // Duplicate content
    [topRef.current, bottomRef.current].forEach(el => {
      el.innerHTML += el.innerHTML;
    });

    setup(topRef.current, -1);  // Leftward
    setup(bottomRef.current, 1);  // Rightward
  }, []);

  return (
    <section className="w-full bg-gray-400 text-white py-12 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-6">AS FEATURED ON</h2>

      <div className="overflow-hidden whitespace-nowrap mb-4">
        <div ref={topRef} className="inline-flex items-center space-x-8 gap-20">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="" className="h-12 object-contain" />
          ))}
        </div>
      </div>

      <div className="overflow-hidden whitespace-nowrap">
        <div ref={bottomRef} className="inline-flex items-center space-x-8 gap-20">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="" className="h-12 object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfiniteMarquee;
