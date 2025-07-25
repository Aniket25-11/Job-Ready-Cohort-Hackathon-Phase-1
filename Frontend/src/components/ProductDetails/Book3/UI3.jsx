import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

const pictures = [
  "DSC01071",
  "DSC00680",
  "DSC00933",
  "DSC01103",
  "DSC00966",
  "DSC01145",
  "DSC01420",
  "DSC00983",
  "DSC01489",
  "DSC01011",
  "DSC01461",
  "DSC01040",
  "DSC02064",
  "DSC01064",
  "DSC02031",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "make-epic-money",
    back: pictures[0],
  },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "make-epic-money-back",
});

export const UI3 = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const flipAudioRef = useRef(null);

  // Initialize audio object
  useEffect(() => {
    flipAudioRef.current = new Audio("/audios/page-flip-01a.mp3");
    flipAudioRef.current.load();
  }, []);

  // Listen for first user click to enable audio
  useEffect(() => {
    const handleFirstClick = () => {
      setCanPlayAudio(true);
      window.removeEventListener("click", handleFirstClick);
    };
    window.addEventListener("click", handleFirstClick);
    return () => window.removeEventListener("click", handleFirstClick);
  }, []);

  // Play audio on page change (after permission granted)
  useEffect(() => {
    if (canPlayAudio && flipAudioRef.current) {
      flipAudioRef.current.currentTime = 0;
      flipAudioRef.current.play().catch((err) => {
        console.warn("Audio playback failed:", err);
      });
    }
  }, [page, canPlayAudio]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href=""
        >
          
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Ankur Warikoo
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Do-Epic-Shit
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Three.js</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Tutorials</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">Practice</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black">
              Ankur Warikoo
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
               Do-Epic-Shit
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Three.js</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Ultimate Guide
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Tutorials</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Learn
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">Practice</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Creative
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
