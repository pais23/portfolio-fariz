import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import handshakeAnimation from '../public/handshake-animation.json';

interface LoadingScreenProps {
  loading: boolean;
  fadeOut: boolean;
  translations: any;
  language: 'id' | 'en';
}

export default function LoadingScreen({ loading, fadeOut, translations, language }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Helper function to get translated text
  const t = (key: string) => translations[language][key] || key;

  useEffect(() => {
    setMounted(true);
    if (!loading) return;
    
    // Animate a smooth premium progress bar from 0 to 100
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic random loading increments
        const step = Math.floor(Math.random() * 10) + 5;
        return Math.min(prev + step, 100);
      });
    }, 70);

    // Show subtitle after words complete their transition
    const subtitleTimer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(subtitleTimer);
    };
  }, [loading]);

  if (!loading) return null;

  // Split text into words for staggered animation
  const words = t('preloadText').split(' ');

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
      filter: 'blur(4px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] // Apple-style custom ease-out
      }
    }
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-950 z-50 transition-all duration-1000 ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow spots */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Magical floaty background pixie dust sparkles inside Loading Screen */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 dark:opacity-60">
        {mounted && [...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400 dark:bg-teal-300"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float-up ${Math.random() * 4 + 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col items-center px-6 text-center max-w-xl z-10">
        {/* Animated Handshake Lottie with glowing ring */}
        <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] aspect-square -mb-6 sm:-mb-8 md:-mb-10 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-teal-100/40 dark:bg-teal-950/20 blur-xl pointer-events-none scale-90 animate-pulse" />
          {mounted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="w-full h-full"
            >
              <Lottie animationData={handshakeAnimation} loop={true} />
            </motion.div>
          ) : (
            <div className="w-full h-full bg-transparent" />
          )}
        </div>

        {/* Breathtakingly Aesthetic Staggered Heading Word Reveal */}
        <div className="min-h-[50px] sm:min-h-[60px] flex items-center justify-center select-none">
          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight flex flex-wrap justify-center gap-x-2.5 gap-y-1.5"
          >
            {words.map((word: string, index: number) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-500 dark:from-teal-400 dark:via-emerald-300 dark:to-amber-300 bg-clip-text text-transparent drop-shadow-sm"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Dynamic sleek progress bar with tiny glowing pilot star */}
        <div className="w-48 sm:w-64 h-[4px] bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden mt-8 relative shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-teal-500 via-emerald-400 to-amber-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(45,212,191,0.6)] relative"
            style={{ width: `${progress}%` }}
          >
            {progress > 0 && progress < 100 && (
              <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff] animate-ping" />
            )}
          </div>
        </div>

        {/* Professional tagline transitioning in */}
        <div className="min-h-[24px] mt-4 flex items-center justify-center">
          {mounted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={showSubtitle ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xs font-mono tracking-[0.2em] uppercase text-teal-600/70 dark:text-teal-400/60 font-semibold select-none"
            >
              FARIZ NUR MASYHURI — SOFTWARE ENGINEER
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translateY(10px) scale(0.5);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
