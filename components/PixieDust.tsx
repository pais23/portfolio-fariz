import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
  decay: number;
  rotation: number;
  rotationSpeed: number;
  isStar: boolean;
}

export default function PixieDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Detect initial dark mode setting
    const checkDark = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    // Setup mutation observer to watch for theme switches on <html>
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Dark mode sparkles: glowing pastel teals, emeralds, golds, and whites
    const darkColors = [
      'rgba(45, 212, 191, ',   // teal-400
      'rgba(52, 211, 153, ',   // emerald-400
      'rgba(251, 191, 36, ',   // amber-400
      'rgba(255, 255, 255, ',  // white
      'rgba(14, 165, 233, ',   // sky-500
    ];

    // Light mode sparkles: vibrant solid teals, emeralds, rich ambers, and deep purples
    const lightColors = [
      'rgba(13, 148, 136, ',   // teal-600
      'rgba(5, 150, 105, ',    // emerald-600
      'rgba(217, 119, 6, ',    // amber-600
      'rgba(79, 70, 229, ',    // indigo-600
      'rgba(219, 39, 119, ',   // pink-600
    ];

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number, isSlow = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = isSlow ? Math.random() * 0.8 : Math.random() * 2 + 0.5;
      
      // Calculate cursor speed for dynamic particle speed
      const dx = x - lastMouseRef.current.x;
      const dy = y - lastMouseRef.current.y;
      const mouseSpeed = Math.sqrt(dx * dx + dy * dy);
      const speedMultiplier = Math.min(1 + mouseSpeed * 0.05, 3);

      const isCurrentDark = document.documentElement.classList.contains('dark');
      const colorsToUse = isCurrentDark ? darkColors : lightColors;

      return {
        x,
        y,
        vx: Math.cos(angle) * speed * (isSlow ? 0.5 : speedMultiplier) + (Math.random() - 0.5) * 0.5,
        vy: Math.sin(angle) * speed * (isSlow ? 0.5 : speedMultiplier) - Math.random() * 0.4 - 0.2, // slight upward drift
        size: Math.random() * 4 + 1.5,
        alpha: Math.random() * 0.4 + 0.6,
        color: colorsToUse[Math.floor(Math.random() * colorsToUse.length)],
        decay: Math.random() * 0.012 + 0.008, // slightly longer lifetime for extra magic
        rotation: Math.random() * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.1,
        isStar: Math.random() > 0.5, // 50% chance of being a 4-point sparkle star
      };
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      mouseRef.current = { x, y, isMoving: true };

      // Spawn active trail particles
      const count = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        particles.push(createParticle(x, y));
      }

      lastMouseRef.current = { x, y };
    };

    // Spawn continuous idle sparkles near stationary cursor to make it feel alive
    let idleInterval = setInterval(() => {
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        particles.push(createParticle(mouseRef.current.x, mouseRef.current.y, true));
      }
    }, 120);

    window.addEventListener('mousemove', handleMouseMove);

    // Draw star helper
    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isCurrentDark = document.documentElement.classList.contains('dark');

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.005; // tiny gravity pull downward
        p.alpha -= p.decay;
        p.size *= 0.985; // gradually shrink
        p.rotation += p.rotationSpeed;

        if (p.alpha <= 0 || p.size < 0.5) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
        
        // Enhance shadow glows in dark mode, keep clean & crisp in light mode
        if (isCurrentDark) {
          ctx.shadowBlur = p.isStar ? 8 : 4;
          ctx.shadowColor = p.color.includes('251') ? 'rgba(251, 191, 36, 0.6)' : 'rgba(45, 212, 191, 0.6)';
        } else {
          ctx.shadowBlur = p.isStar ? 3 : 1;
          ctx.shadowColor = 'rgba(13, 148, 136, 0.2)';
        }

        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.isStar) {
          // Draw a beautiful 4-point flare star
          drawStar(0, 0, 4, p.size, p.size * 0.25);
        } else {
          // Draw a standard soft circle sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(idleInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 w-full h-full pointer-events-none z-50 transition-all duration-300 ${
        isDarkMode ? 'mix-blend-screen opacity-100' : 'mix-blend-normal opacity-90'
      }`}
      style={{ backfaceVisibility: 'hidden' }}
    />
  );
}
