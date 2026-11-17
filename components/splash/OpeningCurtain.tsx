'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningCurtain() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto slide-up after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-curtain"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.95, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] text-white overflow-hidden select-none"
        >
          {/* Ambient Lighting Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14)_0%,transparent_60%)] pointer-events-none" />

          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Brand Welcome Headline */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="mb-4 font-sans text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_30px_rgba(16,185,129,0.35)]"
            >
              Welcome to{' '}
              <span className="text-emerald-400">Arkan Technologies</span>
            </motion.h1>

            {/* Mission Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-lg text-xs sm:text-sm md:text-base font-light tracking-[0.14em] text-slate-300 font-sans"
            >
              Where innovation powers real-world infrastructure.
            </motion.p>

            {/* Glowing Accent Circuit Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '90px' }}
              transition={{ delay: 1, duration: 0.8, ease: 'easeInOut' }}
              className="h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-400 my-6 rounded-full shadow-[0_0_12px_#10b981]"
            />

            {/* Company Title Badge */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-slate-400 font-mono"
            >
              Arkan Technologies Limited
            </motion.span>
          </div>

          {/* Quick Skip Control */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute bottom-8 text-[10px] tracking-widest uppercase text-slate-500 hover:text-emerald-400 transition-colors duration-200 font-mono cursor-pointer"
          >
            [ Skip Intro ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}