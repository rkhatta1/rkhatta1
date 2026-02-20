"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORTUNES = [
  "A pleasant surprise is waiting for you.",
  "Good things come to those who hustle.",
  "Today is a good day to try something new.",
  "Your smile is your superpower.",
  "A new chapter is about to begin.",
  "Opportunities multiply as they are seized.",
  "Your lucky numbers are: 3, 17, 24, 38, 52.",
  "Something you lost will soon be found.",
  "A stranger will become a lifelong friend.",
  "Now is the time. The time is now.",
  "Laughter is the shortest distance between two people.",
  "A pleasant journey lies ahead.",
  "Wealth is not measured in gold but in joy.",
  "Today's lucky color: red.",
  "The best is yet to come.",
  "A fun surprise is coming your way soon.",
  "You will soon be sitting on top of the world.",
  "An exciting opportunity is just around the corner.",
  "Good luck is the result of good planning.",
  "Your hard work will soon pay off.",
  "A dream you have will come true.",
  "Someone admires you from afar.",
  "You will receive an unexpected gift.",
  "Change is coming. Embrace it.",
  "Today is your lucky day!",
  "A long lost friend will come back into your life.",
  "Your patience will be rewarded.",
  "Love is just around the corner.",
  "You will travel to many exotic places.",
  "Fortune is smiling upon you today.",
  "Great things are coming your way.",
  "You will live a long and happy life.",
  "Today, take the road less traveled.",
  "Soon you will be dancing on sunshine.",
  "The stars are aligned in your favor.",
  "Go with your gut today.",
  "Keep your eyes open. Something big is coming.",
  "You are about to make a great discovery.",
  "This is the beginning of something wonderful.",
  "Your kindness will be returned tenfold.",
  "Someone is proud of you right now.",
  "A happy event will soon take place.",
  "Do not be afraid to take the first step.",
  "You are closer to your goal than you think.",
  "Good news will come to you from far away.",
  "It is a good day to finish what you started."
];

const SCRATCH_THRESHOLD = 600;
const TAP_THRESHOLD = 8;

export default function FortuneCookie() {
  const [scratchProgress, setScratchProgress] = useState(0);
  const [isBroken, setIsBroken] = useState(false);
  const [fortuneZoomed, setFortuneZoomed] = useState(false);
  const [fortune] = useState(() =>
    FORTUNES[Math.floor(Math.random() * FORTUNES.length)]
  );
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const lastPos = useRef(null);

  const basePath = useMemo(() => 
    typeof window !== 'undefined' && process.env.NODE_ENV === 'development' ? '' : '/rkhatta1',
  []);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const vibrate = useCallback((intensity) => {
    if (navigator.vibrate) {
      navigator.vibrate(intensity);
    }
  }, []);

  const updateProgress = useCallback(
    (x, y) => {
      if (isBroken) return;

      const curr = { x, y };
      if (lastPos.current) {
        const dist = Math.hypot(
          curr.x - lastPos.current.x,
          curr.y - lastPos.current.y
        );
        setScratchProgress((prev) => {
          const next = Math.min(prev + dist, SCRATCH_THRESHOLD);
          if (next >= SCRATCH_THRESHOLD && !isBroken) {
            setTimeout(() => {
              setIsBroken(true);
            }, 100);
          }
          return next;
        });
      }
      lastPos.current = curr;
    },
    [isBroken]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return;
      if (!(e.buttons === 1)) return;
      updateProgress(e.clientX, e.clientY);
    },
    [updateProgress, isTouchDevice]
  );

  const handleMouseDown = useCallback(() => {
    if (isTouchDevice) return;
    lastPos.current = null;
  }, [isTouchDevice]);

  const handleTap = useCallback(() => {
    if (isBroken) return;

    setScratchProgress((prev) => {
      const tapIncrement = SCRATCH_THRESHOLD / TAP_THRESHOLD;
      const next = Math.min(prev + tapIncrement, SCRATCH_THRESHOLD);
      const progressRatio = next / SCRATCH_THRESHOLD;
      const vibrationIntensity = Math.floor(10 + progressRatio * 90);
      vibrate(vibrationIntensity);

      if (next >= SCRATCH_THRESHOLD && !isBroken) {
        setTimeout(() => {
          setIsBroken(true);
          vibrate([100, 50, 200]);
        }, 100);
      }
      return next;
    });
  }, [isBroken, vibrate]);

  const progressPct = Math.min((scratchProgress / SCRATCH_THRESHOLD) * 100, 100);

  const handleReset = () => {
    setScratchProgress(0);
    setIsBroken(false);
    setFortuneZoomed(false);
    lastPos.current = null;
    window.location.reload();
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none overflow-hidden">
      <div className="h-[280px] flex flex-col items-center justify-center">
        <div
          className={`relative w-32 h-32 ${
            !isBroken ? "cursor-crosshair" : "cursor-pointer"
          }`}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onTouchStart={(e) => {
            if (isBroken) return;
            e.preventDefault();
            handleTap();
          }}
          onClick={() => isBroken && setFortuneZoomed(true)}
        >
          <AnimatePresence mode="wait">
            {!isBroken ? (
              <motion.div
                key="intact"
                className="absolute inset-0 flex items-center justify-center"
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={`${basePath}/intact.png`}
                  alt="Fortune cookie"
                  className="w-full h-full object-contain drop-shadow-lg"
                  animate={{
                    x: progressPct > 30 ? [0, -2, 2, -1, 1, 0] : 0,
                    y: progressPct > 30 ? [0, 1, -1, 2, -2, 0] : 0,
                  }}
                  transition={{
                    duration: 0.15,
                    repeat: progressPct > 30 ? Infinity : 0,
                  }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="broken"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img
                  src={`${basePath}/broken.png`}
                  alt="Broken fortune cookie"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="h-10 mt-2 flex items-center justify-center">
          {!isBroken && (
            <motion.div
              className="w-48 h-2 bg-forest-800 rounded overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: scratchProgress > 0 ? 1 : 0.3 }}
            >
              <motion.div
                className="h-full bg-forest-300"
                style={{ width: `${progressPct}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {fortuneZoomed && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFortuneZoomed(false)}
          >
            <motion.div
              className="bg-forest-100 px-8 py-6 border-4 border-forest-800 max-w-md mx-4 rounded cursor-pointer"
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-forest-800 text-base md:text-lg text-center leading-relaxed font-serif">
                "{fortune}"
              </p>
              <div className="flex justify-center mt-5">
                <button
                  onClick={handleReset}
                  className="text-xs text-forest-600 hover:text-forest-800 transition-colors uppercase tracking-wide"
                >
                  [ Try Another ]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
